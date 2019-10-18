"use strict";
cc._RF.push(module, '2c328CM0oxFY4QpT9FDAQc3', 'result detail-exercise');
// Script/结果页面/result detail-exercise.js

'use strict';

/***********************************************************************************************************************************
功能：用户做题之后结果的展示页面
**********************************************************************************************************************************/

cc.Class({
    extends: cc.Component,

    properties: {
        OPT_HEIGHT: 80, // 每项的高度
        PAGE_NUM: 8, // 每页为8个;
        item_prefab: { //预制体
            type: cc.Prefab,
            default: null
        },

        scroll_view: { //题目的滚动窗口
            type: cc.ScrollView,
            default: null
        }
    },

    onLoad: function onLoad() {
        this.exercise_done = []; //所有做的题
        this.exercise_input = []; //用户所有输入
        this.exercise_rw = []; //用户做题情况
        this.total = JSON.parse(cc.sys.localStorage.getItem('total'));
        this.allexercise = JSON.parse(cc.sys.localStorage.getItem('allexercise'));
        this.allinput = JSON.parse(cc.sys.localStorage.getItem('allinput'));
        this.allanswer = JSON.parse(cc.sys.localStorage.getItem('allanswer'));
        cc.log(this.allanswer);
        this.rw = JSON.parse(cc.sys.localStorage.getItem('rw'));
        //向对应数组push数据;
        for (var i = 0; i < this.total; i++) {
            this.allexercise[i] = this.allexercise[i];
            this.exercise_done.push(this.allexercise[i]); //所有做的题
            this.exercise_input.push(this.allinput[i]); //用户所有输入
            this.exercise_rw.push(this.rw[i]); //用户做题情况
        }

        this.content = this.scroll_view.content; //答案横坐标
        this.opt_item_set = [];
        for (var i = 0; i < this.total; i++) {
            var item = cc.instantiate(this.item_prefab);
            this.content.addChild(item);
            this.opt_item_set.push(item);
        }

        this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
    },

    start: function start() {
        this.start_y = this.content.y;
        this.start_index = 0; // 当前我们的Item加载的数据里面的起始数据记录的索引;
        this.load_record(this.start_index);
    },

    // 从这个索引开始，加载数据记录到滚动列表里面的选项
    load_record: function load_record(start_index) {
        var exseq;
        var excontent;
        var exinput;
        var exanswer;
        var exrw;
        this.start_index = start_index;
        for (var i = 0; i < this.total; i++) {
            exseq = this.opt_item_set[i].getChildByName("num"); //题目序号
            exseq.color = new cc.color(105, 105, 105, 0);
            excontent = this.opt_item_set[i].getChildByName("label"); //题目内容
            exinput = this.opt_item_set[i].getChildByName("input"); //用户输入
            exanswer = this.opt_item_set[i].getChildByName("answer"); //题目答案
            exrw = this.opt_item_set[i].getChildByName("wrong"); //是否正确
            exseq.getComponent(cc.Label).string = (i + 1).toString(); //题目序号
            excontent.getComponent(cc.Label).string = this.allexercise[i]; //题目文本
            exanswer.color = new cc.color(34, 139, 34, 0);
            if (this.rw[i] == 0) {
                //用户回答错误
                if (this.allinput[i] != 0) {
                    //用户是否作答
                    exinput.getComponent(cc.Label).string = this.allinput[i];
                    exrw.getComponent(cc.Label).string = "——"; //错误答案的横线
                    exanswer.getComponent(cc.Label).string = this.allanswer[i]; //正确答案
                } else {
                    exinput.getComponent(cc.Label).string = "未作答"; //用户未作答
                    exrw.getComponent(cc.Label).string = ""; //未作答不需要错误答案的横线
                    exanswer.getComponent(cc.Label).string = this.allanswer[i]; //正确答案
                }
            } else {
                exinput.getComponent(cc.Label).string = this.allinput[i];
                exinput.color = new cc.color(34, 139, 34, 0);
                exrw.getComponent(cc.Label).string = "";
                exanswer.getComponent(cc.Label).string = "";
            }
        }
    },

    on_scroll_ended: function on_scroll_ended() {
        this.scrollveiw_load_recode();
        this.scroll_view.elastic = true;
    },

    scrollveiw_load_recode: function scrollveiw_load_recode() {
        // 向下加载
        if (this.start_index + this.PAGE_NUM * 3 < this.exercise_done.length && this.content.y >= this.start_y + this.PAGE_NUM * 2 * this.OPT_HEIGHT) {
            // 动态加载

            if (this.scroll_view._autoScrolling) {
                // 等待这个自动滚动结束以后再做加载
                this.scroll_view.elastic = false; // 暂时关闭回弹效果
                return;
            }

            var down_loaded = this.PAGE_NUM;
            this.start_index += down_loaded;
            if (this.start_index + this.PAGE_NUM * 3 > this.exercise_done.length) {
                var out_len = this.start_index + this.PAGE_NUM * 3 - this.exercise_done.length;
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
    update: function update(dt) {
        this.scrollveiw_load_recode();
    },

    back: function back() {
        //回到主菜单
        cc.director.loadScene("lxymenu");
    }
});

cc._RF.pop();