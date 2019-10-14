(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/fill-in-blanks-3.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7dd54OfWqhB15G41+94zFu0', 'fill-in-blanks-3', __filename);
// Script/fill-in-blanks-3.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        lable: {
            //用于向用户展示题目
            default: null,
            type: cc.Label
        },

        lable_input: {
            //用于显示用户通过键盘输入的数
            default: null,
            type: cc.Label
        },

        lbTime: { //显示时间
            default: null,
            type: cc.Label
        },

        lbScore: { //显示正确的题目数量
            default: null,
            type: cc.Label
        },

        lbSeq: { //显示题号
            default: null,
            type: cc.Label
        },

        lbSeqTotal: { //总题目数
            default: null,
            type: cc.Label
        },

        Right: {
            default: null,
            type: cc.Prefab
        },

        Wrong: {
            default: null,
            type: cc.Prefab
        },

        mark: {
            default: null,
            type: cc.Node

        },

        right_audio: {
            default: null,
            type: cc.AudioClip
        },

        wrong_audio: {
            default: null,
            type: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.input; //用户使用键盘输入的字符串
        this.answer; //题目的标准答案
        this.choose; //记录用户选择的题目类型
        this.timecnt = 0; //记录时间
        this.score; //记录做对的题目数量
        this.seq; //记录题号
        this.allexercise; //记录所有的题目
        this.allinput; //记录用户所有的答案
    },
    start: function start() {
        cc.log("start to run");
        this.input = "";
        this.answer = "";
        this.choose = JSON.parse(cc.sys.localStorage.getItem('choose'));
        this.score = 0;
        this.defaultGame();
        this.schedule(this.doCountTime, 1); //计时
        this.seq = 1;
        this.total = JSON.parse(cc.sys.localStorage.getItem('total'));
        this.lbSeqTotal.string = this.total.toString();
    },


    //计时
    doCountTime: function doCountTime() {
        //每秒更新显示信息
        this.timecnt += 1;
        //刷新lable
        this.lbTime.string = this.timecnt.toString();
    },


    defaultGame: function defaultGame() {
        //每一类题型的代码逻辑
        switch (this.choose) {
            case 31:
                //两位数除以一位数
                this.level_31();
                break;
            case 32:
                //三位数除以一位数
                this.level_32();
                break;
            case 33:
                //个位数为0的四位数除以一位数
                this.level_33();
                break;
            case 34:
                //两位数乘以两位数
                this.level_34();
                break;
            case 35:
                //三位数减法
                this.level_35();
                break;
            case 36:
                //三位数加法
                this.level_36();
                break;
        }
    },

    isCompositeNum: function isCompositeNum(num) {
        //判断是否是合数
        var i;
        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                return 1;
            }
        }
        return 0;
    },

    hasFactorBelow10: function hasFactorBelow10(num) {
        //判断是否有10以下的因子
        var i;
        for (i = 2; i < 10; i++) {
            if (num % i == 0) {
                return i;
            }
        }
        return 0;
    },

    level_31: function level_31() {
        //两位数除以一位数
        var random = Math.round(Math.random() * 99);
        var factor = this.hasFactorBelow10(random); //factor为10random的10以下的因子
        while (random < 10 || factor == 0 || factor == 2) {
            random = Math.round(Math.random() * 99);
            factor = this.hasFactorBelow10(random);
        }
        var string = random.toString();
        string += " ÷ ";
        string += factor.toString();
        string += " =";
        this.lable.string = string;
        var answer = Math.round(random / factor);
        this.answer = answer.toString();
        cc.log("The answer is" + this.answer);
    },

    level_32: function level_32() {
        //三位数除以一位数
        var random = Math.round(Math.random() * 999);
        var factor = this.hasFactorBelow10(random); //factor为10random的10以下的因子
        while (random < 100 || factor == 0 || factor == 2) {
            random = Math.round(Math.random() * 999);
            factor = this.hasFactorBelow10(random);
        }
        var string = random.toString();
        string += " ÷ ";
        string += factor.toString();
        string += " =";
        this.lable.string = string;
        var answer = Math.round(random / factor);
        this.answer = answer.toString();
        cc.log("The answer is" + this.answer);
    },

    level_33: function level_33() {
        //个位数为0的四位数除以一位数
        //先生成3位数，然后乘以10
        var random = Math.round(Math.random() * 999);
        var factor = this.hasFactorBelow10(random); //factor为10random的10以下的因子
        while (random < 100 || factor == 0 || factor == 2) {
            random = Math.round(Math.random() * 999);
            factor = this.hasFactorBelow10(random);
        }
        random *= 10;
        var string = random.toString();
        string += " ÷ ";
        string += factor.toString();
        string += " =";
        this.lable.string = string;
        var answer = Math.round(random / factor);
        this.answer = answer.toString();
        cc.log("The answer is" + this.answer);
    },

    level_34: function level_34() {
        //两位数乘以两位数
        var random1 = Math.round(Math.random() * 99);
        while (random1 < 10) {
            random1 = Math.round(Math.random() * 99);
        }
        var random2 = Math.round(Math.random() * 99);
        while (random2 < 10) {
            random2 = Math.round(Math.random() * 99);
        }
        var string = random1.toString();
        string += " × ";
        string += random2.toString();
        string += " =";
        this.lable.string = string;
        var answer = Math.round(random1 * random2);
        this.answer = answer.toString();
        cc.log("The answer is" + this.answer);
    },

    level_35: function level_35() {
        //三位数减法
        var random1 = Math.round(Math.random() * 999);
        while (random1 < 100) {
            random1 = Math.round(Math.random() * 999);
        }
        var random2 = Math.round(Math.random() * 999);
        while (random2 < 100) {
            random2 = Math.round(Math.random() * 99);
        }
        var temp;
        if (random2 > random1) {
            temp = random2;
            random2 = random1;
            random1 = temp;
        }
        var string = random1.toString();
        string += " - ";
        string += random2.toString();
        string += " =";
        this.lable.string = string;
        var answer = Math.round(random1 - random2);
        this.answer = answer.toString();
        cc.log("The answer is" + this.answer);
    },

    level_36: function level_36() {
        //三位数加法
        var random1 = Math.round(Math.random() * 999);
        while (random1 < 100) {
            random1 = Math.round(Math.random() * 999);
        }
        var random2 = Math.round(Math.random() * 999);
        while (random2 < 100) {
            random2 = Math.round(Math.random() * 99);
        }
        var string = random1.toString();
        string += " + ";
        string += random2.toString();
        string += " =";
        this.lable.string = string;
        var answer = Math.round(random1 + random2);
        this.answer = answer.toString();
        cc.log("The answer is" + this.answer);
    },

    bt1_Clicked: function bt1_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "1";
        this.lable_input.string = this.input;
    },

    bt2_Clicked: function bt2_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "2";
        this.lable_input.string = this.input;
    },

    bt3_Clicked: function bt3_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "3";
        this.lable_input.string = this.input;
    },
    bt4_Clicked: function bt4_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "4";
        this.lable_input.string = this.input;
    },

    bt5_Clicked: function bt5_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "5";
        this.lable_input.string = this.input;
    },

    bt6_Clicked: function bt6_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "6";
        this.lable_input.string = this.input;
    },

    bt7_Clicked: function bt7_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "7";
        this.lable_input.string = this.input;
    },

    bt8_Clicked: function bt8_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "8";
        this.lable_input.string = this.input;
    },

    bt9_Clicked: function bt9_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "9";
        this.lable_input.string = this.input;
    },

    bt0_Clicked: function bt0_Clicked() {
        if (this.input.length < 10) //最多允许用户输入10位
            this.input += "0";
        this.lable_input.string = this.input;
    },

    bt_dot_Clicked: function bt_dot_Clicked() {
        if (this.input.length < 10 && this.input.length > 0) //最多允许用户输入10位
            this.input += ".";
        this.lable_input.string = this.input;
    },

    bt_delete_Clicked: function bt_delete_Clicked() {
        if (this.input.length > 0) {
            this.input = this.input.substring(0, this.input.length - 1);
        }
        this.lable_input.string = this.input;
    },

    bt_commit_Clicked: function bt_commit_Clicked() {
        var expOne;
        if (this.input.length == 0) {
            Alert.show("你还没有填写答案，不能提交哦", null, false);
        } else {
            cc.log("commit successfully");
            this.refreshSeq();
            if (this.answer == this.input) {
                this.current = cc.audioEngine.play(this.right_audio, false, 20);
                cc.log("Your answer is right");
                expOne = cc.instantiate(this.Right);
                expOne.x = 0;
                expOne.y = 0;
                this.mark.addChild(expOne);
                this.scheduleOnce(function () {
                    // 这里的 this 指向 component
                    this.mark.removeChild(expOne);
                }, 1);
                this.refreshScore();
            } else {
                this.current = cc.audioEngine.play(this.wrong_audio, false, 20);
                expOne = cc.instantiate(this.Wrong);
                expOne.x = 0;
                expOne.y = 0;
                this.mark.addChild(expOne);
                this.scheduleOnce(function () {
                    // 这里的 this 指向 component
                    this.mark.removeChild(expOne);
                }, 1);
                cc.log("Your answer is wrong");
            }
            this.input = "";
            this.lable_input.string = this.input;
            if (this.seq != this.total) this.defaultGame();else cc.director.loadScene("lxymenu"); //在这里跳到结果页面
        }
    },

    bt_skip_Clicked: function bt_skip_Clicked() {
        this.refreshSeq();
        Alert.show("别担心，稍后可以在错题中查看答案哦^_^", null, false);
        if (this.seq != this.total) this.defaultGame();else cc.director.loadScene("lxymenu"); //在这里跳到结果页面
    },

    //刷新得分
    refreshScore: function refreshScore() {
        this.score++;
        this.lbScore.string = this.score.toString();
        this.lbScore.node.stopAllActions();
        this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.3, 1.3), cc.scaleTo(0.1, 1, 1)));
    },
    //刷新题号
    refreshSeq: function refreshSeq() {
        this.seq++;
        this.lbSeq.string = this.seq.toString();
        this.lbScore.node.stopAllActions();
        this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.3, 1.3), cc.scaleTo(0.1, 1, 1)));
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
        //# sourceMappingURL=fill-in-blanks-3.js.map
        