"use strict";
cc._RF.push(module, 'e3593W4Vp5C5YqA1uNDzVRD', 'error_abstract');
// Script/error_abstract.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        OPT_HEIGHT: 80, // 每项的高度
        PAGE_NUM: 8, // 每页为8个;
        item_prefab: {
            type: cc.Prefab,
            default: null
        },

        scroll_view: {
            type: cc.ScrollView,
            default: null
        },

        lbGrade: {
            type: cc.Label,
            default: null
        }
    },

    onLoad: function onLoad() {
        this.exercise = [];
        this.input = [];
        this.answer = [];
        this.content = this.scroll_view.content; //答案横坐标
        this.opt_item_set = [];
        this.choose;
    },

    start: function start() {},

    bt1_clicked: function bt1_clicked() {
        this.exercise = JSON.parse(cc.sys.localStorage.getItem('errorbook1'));
        this.input = JSON.parse(cc.sys.localStorage.getItem('wronganswer1'));
        this.answer = JSON.parse(cc.sys.localStorage.getItem('erbkanswer1'));
        this.lbGrade.string = "一年级";
        this.choose = 1;
        cc.sys.localStorage.setItem('errorbook_choose', JSON.stringify(this.choose));
        this.init();
    },

    bt2_clicked: function bt2_clicked() {
        this.exercise = JSON.parse(cc.sys.localStorage.getItem('errorbook2'));
        this.input = JSON.parse(cc.sys.localStorage.getItem('wronganswer2'));
        this.answer = JSON.parse(cc.sys.localStorage.getItem('erbkanswer2'));
        this.lbGrade.string = "二年级";
        this.choose = 2;
        cc.sys.localStorage.setItem('errorbook_choose', JSON.stringify(this.choose));
        this.init();
    },

    bt3_clicked: function bt3_clicked() {
        this.exercise = JSON.parse(cc.sys.localStorage.getItem('errorbook3'));
        this.input = JSON.parse(cc.sys.localStorage.getItem('wronganswer3'));
        this.answer = JSON.parse(cc.sys.localStorage.getItem('erbkanswer3'));
        this.lbGrade.string = "三年级";
        this.choose = 3;
        cc.sys.localStorage.setItem('errorbook_choose', JSON.stringify(this.choose));
        this.init();
    },

    bt_error_exercise_clicked: function bt_error_exercise_clicked() {
        cc.director.loadScene("errorbook");
    },

    bt_back_clicked: function bt_back_clicked() {
        cc.director.loadScene("lxymenu");
    },

    init: function init() {
        this.content.removeAllChildren();
        this.opt_item_set.length = 0;
        for (var i = 0; i < this.exercise.length; i++) {
            var item = cc.instantiate(this.item_prefab);
            this.content.addChild(item);
            this.opt_item_set.push(item);
        }
        this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
        this.start_y = this.content.y;
        this.start_index = 0;
        this.load_record(this.start_index);
    },

    load_record: function load_record(start_index) {
        var label1;
        var label2;
        var label3;
        var label4;
        var label5;
        this.start_index = start_index;
        for (var i = 0; i < this.exercise.length; i++) {
            label1 = this.opt_item_set[i].getChildByName("num"); //题目序号
            label1.color = new cc.color(105, 105, 105, 0);
            label2 = this.opt_item_set[i].getChildByName("label"); //题目内容
            label3 = this.opt_item_set[i].getChildByName("input"); //用户输入
            label4 = this.opt_item_set[i].getChildByName("answer"); //题目答案
            label5 = this.opt_item_set[i].getChildByName("wrong"); //是否正确
            label1.getComponent(cc.Label).string = (i + 1).toString();
            label2.getComponent(cc.Label).string = this.exercise[i];
            label4.color = new cc.color(34, 139, 34, 0);

            if (this.input[i] != ' ') {
                label3.getComponent(cc.Label).string = this.input[i];
                label5.getComponent(cc.Label).string = "——";
                label4.getComponent(cc.Label).string = this.answer[i];
            } else {
                label3.getComponent(cc.Label).string = "未作答";
                label5.getComponent(cc.Label).string = "";
                label4.getComponent(cc.Label).string = this.answer[i];
            }
        }
    },

    on_scroll_ended: function on_scroll_ended() {
        this.scrollveiw_load_recode();
        this.scroll_view.elastic = true;
    },

    scrollveiw_load_recode: function scrollveiw_load_recode() {
        // 向下加载了
        if (this.start_index + this.PAGE_NUM * 3 < this.exercise.length && this.content.y >= this.start_y + this.PAGE_NUM * 2 * this.OPT_HEIGHT) {
            // 动态加载

            if (this.scroll_view._autoScrolling) {
                // 等待这个自动滚动结束以后再做加载
                this.scroll_view.elastic = false; // 暂时关闭回弹效果
                return;
            }

            var down_loaded = this.PAGE_NUM;
            this.start_index += down_loaded;
            if (this.start_index + this.PAGE_NUM * 3 > this.exercise.length) {
                var out_len = this.start_index + this.PAGE_NUM * 3 - this.exercise.length;
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