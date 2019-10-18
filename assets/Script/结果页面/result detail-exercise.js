/***********************************************************************************************************************************
功能：用户做题之后结果的展示页面
**********************************************************************************************************************************/

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
        item_prefab: {//预制体
            type: cc.Prefab,
            default: null,
        },

        scroll_view: {//题目的滚动窗口
            type: cc.ScrollView,
            default: null,
        },
    },

    onLoad: function () {
        this.value_set = [];
		this.value2_set = [];
		this.value3_set = [];
		this.total = JSON.parse(cc.sys.localStorage.getItem('total'));
		this.allexercise = JSON.parse(cc.sys.localStorage.getItem('allexercise'));
		this.allinput = JSON.parse(cc.sys.localStorage.getItem('allinput'));
		this.allanswer = JSON.parse(cc.sys.localStorage.getItem('allanswer'));
		cc.log(this.allanswer);
		this.rw = JSON.parse(cc.sys.localStorage.getItem('rw'));
        // push数据;
        for(var i = 0; i < this.total; i ++) {
			this.allexercise[i] = this.allexercise[i];
            this.value_set.push(this.allexercise[i]);	//所有做的题
			this.value2_set.push(this.allinput[i]);		//用户所有输入
			this.value3_set.push(this.rw[i]);			//用户做题情况
        }
		
        this.content = this.scroll_view.content;						//答案横坐标
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
        this.start_index = 0; // 当前我们的Item加载的数据里面的起始数据记录的索引;
        this.load_record(this.start_index);
    },

    // 从这个索引开始，加载数据记录到滚动列表里面的选项
    load_record: function(start_index) {
		cc.log("你执行这里了吗");
		var label1;
		var label2;
		var label3;
		var label4;
		var label5;
        this.start_index = start_index;
        for(var i = 0; i < this.total; i ++) {
            label1 = this.opt_item_set[i].getChildByName("num");//题目序号
			label1.color = new cc.color(105,105,105,0);
			label2 = this.opt_item_set[i].getChildByName("label");//题目内容
			label3 = this.opt_item_set[i].getChildByName("input");//用户输入
			label4 = this.opt_item_set[i].getChildByName("answer");//题目答案
			label5 = this.opt_item_set[i].getChildByName("wrong");//是否正确
			label1.getComponent(cc.Label).string = (i+1).toString();
			label2.getComponent(cc.Label).string = this.allexercise[i];
			label4.color = new cc.color(34,139,34,0);
			if(this.rw[i] ==0){
				if(this.allinput[i]!=0){
					label3.getComponent(cc.Label).string = this.allinput[i];
					label5.getComponent(cc.Label).string = "——";
					label4.getComponent(cc.Label).string = this.allanswer[i];
				}
				else{
					label3.getComponent(cc.Label).string = "未作答";
					label5.getComponent(cc.Label).string = "";
					label4.getComponent(cc.Label).string = this.allanswer[i];
				}
				
			}
			else{
				label3.getComponent(cc.Label).string = this.allinput[i];
				label3.color = new cc.color(34,139,34,0);
				label5.getComponent(cc.Label).string = "";
				label4.getComponent(cc.Label).string = "";
			}
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
    update: function (dt) {
        this.scrollveiw_load_recode();
    },
	
	back: function(){//回到主菜单
        cc.director.loadScene("lxymenu")
     },
});