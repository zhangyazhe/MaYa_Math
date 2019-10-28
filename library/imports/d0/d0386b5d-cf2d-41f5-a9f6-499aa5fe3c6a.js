"use strict";
cc._RF.push(module, 'd0386tdzy1B9an2SZql/jxq', 'fill-in-blanks-1');
// Script/做题页面/fill-in-blanks-1.js

'use strict';

/***********************************************************************************************************************************
功能：一年级的题目练习
**********************************************************************************************************************************/

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

        Right: { //回答正确预制体
            default: null,
            type: cc.Prefab
        },

        Wrong: { //回答错误预制体
            default: null,
            type: cc.Prefab
        },

        mark: { //预制体父节点
            default: null,
            type: cc.Node

        },

        right_audio: { //回答正确声音
            default: null,
            type: cc.AudioClip
        },

        wrong_audio: { //回答错误声音
            default: null,
            type: cc.AudioClip
        }
    },

    onLoad: function onLoad() {
        this.input; //用户使用键盘输入的字符串
        this.answer; //题目的标准答案
        this.choose; //记录用户选择的题目类型
        this.timecnt = 0; //记录时间
        this.score; //记录做对的题目数量
        this.seq; //记录题号
        this.allexercise = []; //记录所有的题目
        this.allinput = []; //记录用户所有的答案
        this.allanswer = []; //记录所有的答案
        this.rw = []; //记录用户的做题情况
        this.errorbook = []; //错题本
        this.erbkanswer = []; //错题本答案
        this.wronganswer = []; //错误答案
        this.errorbook = JSON.parse(cc.sys.localStorage.getItem('errorbook1')); //记录用户旧错题
        this.erbkanswer = JSON.parse(cc.sys.localStorage.getItem('erbkanswer1')); //记录用户旧错题
        this.wronganswer = JSON.parse(cc.sys.localStorage.getItem('wronganswer1')); //记录用户旧错误答案
        if (this.errorbook == null) {
            this.errorbook = [];
            cc.sys.localStorage.setItem('errorbook1', JSON.stringify(this.errorbook)); //初始化本地错题文件           
        }
        if (this.erbkanswer == null) {
            this.erbkanswer = [];
            cc.sys.localStorage.setItem('erbkanswer1', JSON.stringify(this.erbkanswer)); //初始化本地错题文件           
        }
        if (this.wronganswer == null) {
            this.wronganswer = [];
            cc.sys.localStorage.setItem('wronganswer1', JSON.stringify(this.wronganswer)); //初始化本地错答案文件           
        }
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
        //每一类题型的代码逻辑，11代表一年级第一种题型，12代表一年级第二种题型，22代表二年级第二种题型，以此类推。
        switch (this.choose) {
            case 11:
                this.level_11();
                break;
            case 12:
                this.level_12();
                break;
            case 13:
                this.level_13();
                break;
            case 14:
                this.level_14();
                break;
            case 15:
                this.level_15();
                break;
            case 16:
                this.level_16();
                break;
            case 17:
                this.level_17();
                break;
            case 18:
                this.level_18();
                break;
            case 19:
                var op = Math.round(Math.random() * 8) + 10;
                switch (op) {
                    case 11:
                        this.level_11();
                        break;
                    case 12:
                        this.level_12();
                        break;
                    case 13:
                        this.level_13();
                        break;
                    case 14:
                        this.level_14();
                        break;
                    case 15:
                        this.level_15();
                        break;
                    case 16:
                        this.level_16();
                        break;
                    case 17:
                        this.level_17();
                        break;
                    case 18:
                        this.level_18();
                        break;
                }
                break;
        }
    },

    level_11: function level_11() {
        //5以内加法
        var random1 = Math.round(Math.random() * 5);
        var random2 = Math.round(Math.random() * 5);
        var answer = random1 + random2;
        var string = random1.toString();
        string += " + ";
        string += random2.toString();
        string += " = ";
        this.lable.string = string;
        this.answer = answer.toString();
        cc.log("The answer is " + this.answer);
    },

    level_12: function level_12() {
        //5以内减法
        var random1 = Math.round(Math.random() * 5);
        var random2 = Math.round(Math.random() * 5);
        if (random1 < random2) {
            var random3 = random1;
            random1 = random2;
            random2 = random3;
        }
        var answer = random1 - random2;
        var string = random1.toString();
        string += " - ";
        string += random2.toString();
        string += " = ";
        this.lable.string = string;
        this.answer = answer.toString();
        cc.log("The answer is " + this.answer);
    },

    level_13: function level_13() {
        //6~10加法
        var random1 = Math.round(Math.random() * 10);
        while (random1 < 6) {
            random1 = Math.round(Math.random() * 10);
        }
        var random2 = Math.round(Math.random() * 10);
        while (random2 < 6) {
            random2 = Math.round(Math.random() * 10);
        }
        var answer = random1 + random2;
        var string = random1.toString();
        string += " + ";
        string += random2.toString();
        string += " = ";
        this.lable.string = string;
        this.answer = answer.toString();
        cc.log("The answer is " + this.answer);
    },

    level_14: function level_14() {
        //6~10减法
        var random1 = Math.round(Math.random() * 10);
        while (random1 < 6) {
            random1 = Math.round(Math.random() * 10);
        }
        var random2 = Math.round(Math.random() * 10);
        while (random2 < 6) {
            random2 = Math.round(Math.random() * 10);
        }
        if (random1 < random2) {
            var random3 = random1;
            random1 = random2;
            random2 = random3;
        }
        var answer = random1 - random2;
        var string = random1.toString();
        string += " - ";
        string += random2.toString();
        string += " = ";
        this.lable.string = string;
        this.answer = answer.toString();
        cc.log("The answer is " + this.answer);
    },

    level_15: function level_15() {
        //10以内的连加
        var random1 = Math.round(Math.random() * 10);
        var random2 = Math.round(Math.random() * 10);
        var random3 = Math.round(Math.random() * 10);
        var answer = random1 + random2 + random3;
        var string = random1.toString();
        string += " + ";
        string += random2.toString();
        string += " + ";
        string += random3.toString();
        string += " = ";
        this.lable.string = string;
        this.answer = answer.toString();
        cc.log("The answer is " + this.answer);
    },

    level_16: function level_16() {
        //10以内的连减
        var random1 = Math.round(Math.random() * 10);
        var random2 = Math.round(Math.random() * 10);
        var random3 = Math.round(Math.random() * 10);
        var answer = random1 - random2 - random3;
        while (answer < 0) {
            random1 = Math.round(Math.random() * 10);
            random2 = Math.round(Math.random() * 10);
            random3 = Math.round(Math.random() * 10);
            answer = random1 - random2 - random3;
        }
        var string = random1.toString();
        string += " - ";
        string += random2.toString();
        string += " - ";
        string += random3.toString();
        string += " = ";
        this.lable.string = string;
        this.answer = answer.toString();
        cc.log("The answer is " + this.answer);
    },

    level_17: function level_17() {
        //10以内的连加减
        var random1 = Math.round(Math.random() * 10);
        var random2 = Math.round(Math.random() * 10);
        var random3 = Math.round(Math.random() * 10);
        var op = Math.round(Math.random());
        switch (op) {
            case 0:
                var answer = random1 + random2 - random3;
                while (answer < 0) {
                    random1 = Math.round(Math.random() * 10);
                    random2 = Math.round(Math.random() * 10);
                    random3 = Math.round(Math.random() * 10);
                    answer = random1 - random2 - random3;
                }
                var string = random1.toString();
                string += " + ";
                string += random2.toString();
                string += " - ";
                string += random3.toString();
                string += " = ";
                break;
            case 1:
                var answer = random1 - random2 + random3;
                while (answer < 0) {
                    random1 = Math.round(Math.random() * 10);
                    random2 = Math.round(Math.random() * 10);
                    random3 = Math.round(Math.random() * 10);
                    answer = random1 - random2 - random3;
                }
                var string = random1.toString();
                string += " - ";
                string += random2.toString();
                string += " + ";
                string += random3.toString();
                string += " = ";
                break;
        }
        this.lable.string = string;
        this.answer = answer.toString();
        cc.log("The answer is " + this.answer);
    },

    level_18: function level_18() {
        //10~20加减
        var random1 = Math.round(Math.random() * 20);
        while (random1 < 10) {
            random1 = Math.round(Math.random() * 20);
        }
        var random2 = Math.round(Math.random() * 20);
        while (random2 < 10) {
            random2 = Math.round(Math.random() * 20);
        }
        var op = Math.round(Math.random());
        switch (op) {
            case 0:
                var answer = random1 + random2;
                var string = random1.toString();
                string += " + ";
                string += random2.toString();
                string += " = ";
                break;
            case 1:
                var answer = random1 - random2;
                while (answer < 0) {
                    random1 = Math.round(Math.random() * 20);
                    while (random1 < 10) {
                        random1 = Math.round(Math.random() * 20);
                    }
                    random2 = Math.round(Math.random() * 20);
                    answer = random1 - random2;
                }
                var string = random1.toString();
                string += " - ";
                string += random2.toString();
                string += " = ";
                break;
        }
        this.lable.string = string;
        this.answer = answer.toString();
        cc.log("The answer is " + this.answer);
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
            cc.log("题目 " + this.lable);
            this.allexercise.push(this.lable.string);
            this.allinput.push(this.input);
            this.allanswer.push(this.answer);
            this.refreshSeq();
            if (this.answer == this.input) {
                this.current = cc.audioEngine.play(this.right_audio, false, 0.6);
                cc.log("Your answer is right");
                expOne = cc.instantiate(this.Right);
                expOne.x = 0;
                expOne.y = 0;
                this.mark.addChild(expOne);
                this.scheduleOnce(function () {
                    // 这里的 this 指向 component
                    this.mark.removeChild(expOne);
                }, 0.5);
                this.rw.push(1);
                this.refreshScore();
            } else {
                this.errorbook.push(this.lable.string);
                this.erbkanswer.push(this.answer);
                this.wronganswer.push(this.input);
                this.current = cc.audioEngine.play(this.wrong_audio, false, 0.6);
                expOne = cc.instantiate(this.Wrong);
                expOne.x = 0;
                expOne.y = 0;
                this.rw.push(0);
                this.mark.addChild(expOne);
                this.scheduleOnce(function () {
                    // 这里的 this 指向 component
                    this.mark.removeChild(expOne);
                }, 0.5);
                cc.log("Your answer is wrong");
            }
            this.input = "";
            this.lable_input.string = this.input;
            if (this.seq != this.total + 1) this.scheduleOnce(function () {
                // 这里的 this 指向 component
                this.defaultGame();
            }, 0.5);else {
                cc.sys.localStorage.setItem('errorbook1', JSON.stringify(this.errorbook)); //存储所有错题
                cc.sys.localStorage.setItem('erbkanswer1', JSON.stringify(this.erbkanswer)); //存储错题答案
                cc.sys.localStorage.setItem('wronganswer1', JSON.stringify(this.wronganswer)); //存储错误答案
                cc.sys.localStorage.setItem('allexercise', JSON.stringify(this.allexercise)); //存储所有题目
                cc.sys.localStorage.setItem('allinput', JSON.stringify(this.allinput)); //存储用户所有输入
                cc.sys.localStorage.setItem('rw', JSON.stringify(this.rw)); //存储用户做题情况
                cc.sys.localStorage.setItem('allanswer', JSON.stringify(this.allanswer)); //存储用户做题情况
                cc.director.loadScene("result_detail");
            } //在这里跳到结果页面
        }
    },

    bt_skip_Clicked: function bt_skip_Clicked() {
        this.errorbook.push(this.lable.string);
        this.erbkanswer.push(this.answer);
        this.wronganswer.push(' ');
        this.allexercise.push(this.lable.string);
        this.allinput.push(0);
        this.rw.push(0);
        cc.log(this.answer + "跳过答案");
        this.allanswer.push(this.answer);
        this.refreshSeq();
        this.current = cc.audioEngine.play(this.wrong_audio, false, 0.6);
        Alert.show("别担心，稍后可以在错题中查看答案哦^_^", null, false);
        this.input = "";
        this.lable_input.string = this.input;
        if (this.seq != this.total + 1) this.defaultGame();else {
            cc.sys.localStorage.setItem('errorbook1', JSON.stringify(this.errorbook)); //存储所有错题
            cc.sys.localStorage.setItem('erbkanswer1', JSON.stringify(this.erbkanswer)); //存储错题答案
            cc.sys.localStorage.setItem('wronganswer1', JSON.stringify(this.wronganswer)); //存储错误答案
            cc.sys.localStorage.setItem('allexercise', JSON.stringify(this.allexercise)); //存储所有题目
            cc.sys.localStorage.setItem('allinput', JSON.stringify(this.allinput)); //存储用户所有输入
            cc.sys.localStorage.setItem('allanswer', JSON.stringify(this.allanswer)); //存储用户做题情况
            cc.sys.localStorage.setItem('rw', JSON.stringify(this.rw)); //存储用户做题情况
            cc.log(this.allanswer);
            cc.director.loadScene("result_detail"); //在这里跳到结果页面
        }
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
        if (this.seq != this.total + 1) this.lbSeq.string = this.seq.toString();
        this.lbScore.node.stopAllActions();
        this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.3, 1.3), cc.scaleTo(0.1, 1, 1)));
    },
    //结束练习
    bt_end_Clicked: function bt_end_Clicked() {
        cc.director.loadScene("lxymenu");
    }
});

cc._RF.pop();