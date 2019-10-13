"use strict";
cc._RF.push(module, 'd0386tdzy1B9an2SZql/jxq', 'fill-in-blanks-1');
// Script/fill-in-blanks-1.js

"use strict";

var _cc$Class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cc.Class((_cc$Class = {
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
    },
    start: function start() {
        cc.log("start to run");
        this.input = "";
        this.answer = "";
        this.choose = 18;
        this.score = 0;
        this.defaultGame();
        this.schedule(this.doCountTime, 1); //计时
        this.seq = 1;
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
    }

}, _defineProperty(_cc$Class, "level_12", function level_12() {
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
}), _defineProperty(_cc$Class, "level_13", function level_13() {
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
}), _defineProperty(_cc$Class, "level_14", function level_14() {
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
}), _defineProperty(_cc$Class, "level_15", function level_15() {
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
}), _defineProperty(_cc$Class, "level_16", function level_16() {
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
}), _defineProperty(_cc$Class, "level_17", function level_17() {
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
}), _defineProperty(_cc$Class, "bt1_Clicked", function bt1_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "1";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt2_Clicked", function bt2_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "2";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt3_Clicked", function bt3_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "3";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt4_Clicked", function bt4_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "4";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt5_Clicked", function bt5_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "5";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt6_Clicked", function bt6_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "6";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt7_Clicked", function bt7_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "7";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt8_Clicked", function bt8_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "8";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt9_Clicked", function bt9_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "9";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt0_Clicked", function bt0_Clicked() {
    if (this.input.length < 10) //最多允许用户输入10位
        this.input += "0";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt_dot_Clicked", function bt_dot_Clicked() {
    if (this.input.length < 10 && this.input.length > 0) //最多允许用户输入10位
        this.input += ".";
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt_delete_Clicked", function bt_delete_Clicked() {
    if (this.input.length > 0) {
        this.input = this.input.substring(0, this.input.length - 1);
    }
    this.lable_input.string = this.input;
}), _defineProperty(_cc$Class, "bt_commit_Clicked", function bt_commit_Clicked() {
    this.refreshSeq();
    if (this.input.length == 0) {
        Alert.show("你还没有填写答案，不能提交哦", null, false);
    } else {
        cc.log("commit successfully");
        if (this.answer == this.input) {
            cc.log("Your answer is right");
            this.refreshScore();
        } else {
            cc.log("Your answer is wrong");
        }
        this.input = "";
        this.lable_input.string = this.input;
    }

    this.defaultGame();
}), _defineProperty(_cc$Class, "bt_skip_Clicked", function bt_skip_Clicked() {
    this.refreshSeq();
    Alert.show("别担心，稍后可以在错题中查看答案哦^_^", null, false);
    this.defaultGame();
}), _defineProperty(_cc$Class, "refreshScore", function refreshScore() {
    this.score++;
    this.lbScore.string = this.score.toString();
    this.lbScore.node.stopAllActions();
    this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.3, 1.3), cc.scaleTo(0.1, 1, 1)));
}), _defineProperty(_cc$Class, "refreshSeq", function refreshSeq() {
    this.seq++;
    this.lbSeq.string = this.seq.toString();
    this.lbScore.node.stopAllActions();
    this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.3, 1.3), cc.scaleTo(0.1, 1, 1)));
}), _cc$Class));

cc._RF.pop();