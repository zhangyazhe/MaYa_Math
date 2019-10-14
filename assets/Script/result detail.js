/*
假设世界排行榜要100个玩家的数据，我们怎么使用滚动列表来实现?
显示[1, 100]这个数据
(1)我们将我们滚动列表里面的每个项分成三个页
(2)每一个页面我们制定一个数目，例如8个,根据你的scrollview的大小来决定;
(3)总共使用的滚动列表里面的想 PAGE_NUM * 3 = 24个;
(4) 有限的项要显示 超过它数目的数据记录?

*/

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        OPT_HEIGHT: 80, // 每项的高度
        PAGE_NUM: 8, // 每页为8个;
        item_prefab: {
            type: cc.Prefab,
            default: null,
        },

        scroll_view: {
            type: cc.ScrollView,
            default: null,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.value_set = [];
		this.total = JSON.parse(cc.sys.localStorage.getItem('total'));
		this.allexercise = JSON.parse(cc.sys.localStorage.getItem('allexercise'));
		this.allinput = JSON.parse(cc.sys.localStorage.getItem('allinput'));
		this.rw = JSON.parse(cc.sys.localStorage.getItem('rw'));
        // 如果你这里是排行榜，那么你就push排行榜的数据;
        for(var i = 0; i < this.total; i ++) {
            this.value_set.push(this.allexercise[i]);
			
			cc.log(this.total+this.allexercise[i])
        }
		
        this.content = this.scroll_view.content;
        this.opt_item_set = [];
        for(var i = 0; i < this.total; i ++) {
            var item = cc.instantiate(this.item_prefab);
            this.content.addChild(item);
            this.opt_item_set.push(item);
        }

        this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
    },

    start: function() {
        this.start_y = this.content.y;
        this.start_index = 0; // 当前我们24个Item加载的 100项数据里面的起始数据记录的索引;
        this.load_record(this.start_index);
    },

    // 从这个索引开始，加载数据记录到我们的滚动列表里面的选项
    load_record: function(start_index) {
        this.start_index = start_index;

        for(var i = 0; i < this.total; i ++) {
            var label = this.opt_item_set[i].getComponent(cc.Label);
            // 显示我们的记录;
            label.string = this.value_set[start_index + i];
        }
    },

    on_scroll_ended: function() {
        this.scrollveiw_load_recode();
        this.scroll_view.elastic = true;
    },

    scrollveiw_load_recode: function() {
         // 向下加载了
        if (this.start_index + this.PAGE_NUM * 3 < this.value_set.length &&
            this.content.y >= this.start_y + this.PAGE_NUM * 2 * this.OPT_HEIGHT) { // 动态加载
            
            if (this.scroll_view._autoScrolling) { // 等待这个自动滚动结束以后再做加载
                this.scroll_view.elastic = false; // 暂时关闭回弹效果
                return;
            }

            var down_loaded = this.PAGE_NUM;
            this.start_index += down_loaded;
            if (this.start_index + this.PAGE_NUM * 3 > this.value_set.length) {
                var out_len = this.start_index + this.PAGE_NUM * 3 - this.value_set.length;
                down_loaded -= (out_len);
                this.start_index -= (out_len);
            }
            this.load_record(this.start_index);

            this.content.y -= (down_loaded * this.OPT_HEIGHT);
            return;
        }

        // 向上加载
        if (this.start_index > 0 && this.content.y <= this.start_y) {
            if (this.scroll_view._autoScrolling) { // 等待这个自动滚动结束以后再做加载
                this.scroll_view.elastic = false;
                return;
            }

            var up_loaded = this.PAGE_NUM;
            this.start_index -= up_loaded;
            if (this.start_index < 0) {
                up_loaded += this.start_index;
                this.start_index = 0; 
            }
            this.load_record(this.start_index);
            this.content.y += (up_loaded * this.OPT_HEIGHT);
        }
        // end 
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.scrollveiw_load_recode();
    },
});