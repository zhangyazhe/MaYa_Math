(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a197f3vP3xPMaGtfG0mMR9/', 'main', __filename);
// Script/main.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        //用于计分的Label控件
        lbScore: {
            default: null,
            type: cc.Label
        },
        lbTime: {
            default: null,
            type: cc.Label
        },
        lbSeq: {
            default: null,
            type: cc.Label
        },
        questionList: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        //用于定义包剪布在代码逻辑中的代号
        this.A_DEFINE = 0;
        this.B_DEFINE = 1;
        this.C_DEFINE = 2;
        //用于记录对应出拳的得分
        this.a = 0;
        this.b = 0;
        this.c = 0;
        //题目的答案
        this.ans = 0;
        //记录题号
        this.seq = 1;
        //记录时间
        this.timecnt = 0;
        //记录结果
        this.result_list = [];
    },
    start: function start() {
        this.defaultGame();
        cc.log("start to run");
        this.schedule(this.doCountTime, 1);
    },


    //倒计时
    doCountTime: function doCountTime() {
        //每秒更新显示信息
        this.timecnt += 1;
        //刷新lable
        this.lbTime.string = this.timecnt.toString();
        // this.lbTime.node.stopAllActions();
        // this.lbTime.node.runAction(cc.sequence(cc.scaleTo(0.1,1.3,1.3),cc.scaleTo(0.1,1,1)));
    },


    //重置游戏状态
    defaultGame: function defaultGame() {
        this.b = 0;
        this.c = 0;
        this.a = 0;
        this.ans = 0;
        this.seq = 1;
        //初始化显示的题目
        this.generateQuestion();
    },

    //随机生成题目
    generateQuestion: function generateQuestion() {
        var _this = this;

        var randnum = Math.random() * 149; //生成1~150的随机整数
        var questionNum = Math.round(randnum + 1001);
        var url = "1/" + questionNum.toString();
        //记录答案
        if (randnum >= 1 && randnum <= 50) {
            this.ans = this.A_DEFINE;
        } else if (randnum >= 51 && randnum <= 100) {
            this.ans = this.B_DEFINE;
        } else if (randnum >= 101 && randnum <= 150) {
            this.ans = this.C_DEFINE;
        }
        cc.log("question url = " + url);
        cc.log("question answer is " + this.ans.toString());
        cc.loader.loadRes(url, cc.SpriteFrame, function (err, res) {
            //加载错误则报错
            if (err) {
                console.error(err);
                return;
            }

            //创建一个使用图片资源的新节点对象
            var starNode = new cc.Node(); //创建一个新节点
            //starNode.name = "star1";
            starNode.setPosition(0, 0); //创建随机的位置
            var starSprite = starNode.addComponent(cc.Sprite); //增加精灵组件
            starSprite.spriteFrame = res; //设置精灵组件图片资源
            _this.questionList.addChild(starNode); //场景中增加新节点
        });
    },

    A_Clicked: function A_Clicked() {
        var result = this.A_DEFINE == this.ans;
        if (result) {
            //成功消除计分
            this.a += 1;
            this.refreshScore();
        }
        if (result) {
            this.result_list.push(1);
        } else {
            this.result_list.push(0);
        }
        this.refreshSeq();
        if (this.seq != 31) {
            this.generateQuestion();
        }
    },

    B_Clicked: function B_Clicked() {
        var result = this.B_DEFINE == this.ans;
        if (result) {
            this.b += 1;
            this.refreshScore();
        }
        if (result) {
            this.result_list.push(1);
        } else {
            this.result_list.push(0);
        }
        this.refreshSeq();
        if (this.seq != 31) {
            this.generateQuestion();
        }
    },

    C_Clicked: function C_Clicked() {
        var result = this.C_DEFINE == this.ans;
        if (result) {
            this.c += 1;
            this.refreshScore();
        }
        if (result) {
            this.result_list.push(1);
        } else {
            this.result_list.push(0);
        }
        this.refreshSeq();
        if (this.seq != 31) {
            this.generateQuestion();
        }
    },

    //刷新得分
    refreshScore: function refreshScore() {
        var curScore = this.totalScore();
        this.lbScore.string = curScore.toString();
        this.lbScore.node.stopAllActions();
        this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.3, 1.3), cc.scaleTo(0.1, 1, 1)));
    },

    totalScore: function totalScore() {
        return this.a + this.b + this.c;
    },

    //刷新题号
    refreshSeq: function refreshSeq() {
        var curSeq = ++this.seq;
        if (this.seq == 31) {
            //将时间装入待传递的数据中
            this.result_list.push(this.timecnt);
            //获取常驻结点进行场景间通信
            var node = cc.find('main_persistNode').getComponent('main_persist');
            node.setdata(this.result_list);
            this.toScene();
        } else {
            this.lbSeq.string = curSeq.toString();
            this.lbSeq.node.stopAllActions();
            this.lbSeq.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.3, 1.3), cc.scaleTo(0.1, 1, 1)));
        }
    },

    //跳转场景
    toScene: function toScene() {
        cc.director.loadScene("result_scene");
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=main.js.map
        