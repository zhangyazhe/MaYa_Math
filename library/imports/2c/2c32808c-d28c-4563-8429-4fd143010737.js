"use strict";
cc._RF.push(module, '2c328CM0oxFY4QpT9FDAQc3', 'result detail-exercise');
// Script/result detail-exercise.js

'use strict';

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
            default: null
        },

        scroll_view: {
            type: cc.ScrollView,
            default: null
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.value_set = [];
        this.value2_set = [];
        this.value3_set = [];
        this.total = JSON.parse(cc.sys.localStorage.getItem('total'));
        this.allexercise = JSON.parse(cc.sys.localStorage.getItem('allexercise'));
        this.allinput = JSON.parse(cc.sys.localStorage.getItem('allinput'));
        this.rw = JSON.parse(cc.sys.localStorage.getItem('rw'));
        // 如果你这里是排行榜，那么你就push排行榜的数据;
        for (var i = 0; i < this.total; i++) {
            this.allexercise[i] = this.allexercise[i];
            this.value_set.push(this.allexercise[i]); //所有做的题
            this.value2_set.push(this.allinput[i]); //用户所有输入
            this.value3_set.push(this.rw[i]); //用户做题情况
        }

        this.content = this.scroll_view.content; //答案横坐标
        this.opt_item_set = [];
        this.opt_item_set2 = [];
        for (var i = 0; i < this.total; i++) {
            var item = cc.instantiate(this.item_prefab);
            this.content.addChild(item);
            var item2 = cc.instantiate(this.item_prefab);
            item2.x = 100;
            item2.y = 10;
            this.content.addChild(item2);
            this.opt_item_set.push(item);
            this.opt_item_set2.push(item2);
        }

        this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
    },

    start: function start() {
        this.start_y = this.content.y;
        this.start_index = 0; // 当前我们24个Item加载的 100项数据里面的起始数据记录的索引;
        this.load_record(this.start_index);
    },

    // 从这个索引开始，加载数据记录到我们的滚动列表里面的选项
    load_record: function load_record(start_index) {
        this.start_index = start_index;
        for (var i = 0; i < this.total; i++) {
            var label = this.opt_item_set[i].getComponent(cc.Label);
            var label2 = this.opt_item_set2[i].getComponent(cc.Label);
            // 显示我们的记录;
            label.string = this.value_set[start_index + i];
            label2.color = (255, 255, 0, 255);
            label2.string = this.value2_set[start_index + i];
        }
    },

    on_scroll_ended: function on_scroll_ended() {
        this.scrollveiw_load_recode();
        this.scroll_view.elastic = true;
    },

    scrollveiw_load_recode: function scrollveiw_load_recode() {
        // 向下加载了
        if (this.start_index + this.PAGE_NUM * 3 < this.value_set.length && this.content.y >= this.start_y + this.PAGE_NUM * 2 * this.OPT_HEIGHT) {
            // 动态加载

            if (this.scroll_view._autoScrolling) {
                // 等待这个自动滚动结束以后再做加载
                this.scroll_view.elastic = false; // 暂时关闭回弹效果
                return;
            }

            var down_loaded = this.PAGE_NUM;
            this.start_index += down_loaded;
            if (this.start_index + this.PAGE_NUM * 3 > this.value_set.length) {
                var out_len = this.start_index + this.PAGE_NUM * 3 - this.value_set.length;
                down_loaded -= out_len;
                this.start_index -= out_len;
            }
            this.load_record(this.start_index);

            this.content.y -= down_loaded * this.OPT_HEIGHT;
            return;
        }

        // 向上加载
        if (this.start_index > 0 && this.content.y <= this.start_y) {
            if (this.scroll_view._autoScrolling) {
                // 等待这个自动滚动结束以后再做加载
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
            this.content.y += up_loaded * this.OPT_HEIGHT;
        }
        // end 
    },
    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.scrollveiw_load_recode();
    }
});

cc._RF.pop();