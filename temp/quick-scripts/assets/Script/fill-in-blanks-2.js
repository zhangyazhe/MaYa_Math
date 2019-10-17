(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/fill-in-blanks-2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd6d68ZM8jBKR5VGxSCZ4g3G', 'fill-in-blanks-2', __filename);
// Script/fill-in-blanks-2.js

'use strict';

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
								this.count = 0;
								this.allexercise = []; //记录所有的题目
								this.allinput = []; //记录用户所有的答案
								this.allanswer = []; //记录所有的答案
								this.rw = []; //记录用户的做题情况
								this.errorbook = [];
								this.erbkanswer = [];
								this.wronganswer = [];
								this.errorbook = JSON.parse(cc.sys.localStorage.getItem('errorbook2')); //记录用户老错题
								this.erbkanswer = JSON.parse(cc.sys.localStorage.getItem('erbkanswer2')); //记录用户老错题
								this.wronganswer = JSON.parse(cc.sys.localStorage.getItem('wronganswer2')); //记录用户老错误答案
								cc.log(this.errorbook + "dhjshjsh");
								if (this.errorbook == null) {
												this.errorbook = [];
												cc.sys.localStorage.setItem('errorbook2', JSON.stringify(this.errorbook)); //初始化本地错题文件           
								}
								if (this.erbkanswer == null) {
												this.erbkanswer = [];
												cc.sys.localStorage.setItem('erbkanswer2', JSON.stringify(this.erbkanswer)); //初始化本地错题文件           
								}
								if (this.wronganswer == null) {
												this.wronganswer = [];
												cc.sys.localStorage.setItem('wronganswer2', JSON.stringify(this.wronganswer)); //初始化本地错答案文件           
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
								//每一类题型的代码逻辑
								switch (this.choose) {
												case 21:
																this.plus();
																break;
												case 22:
																this.minus();
																break;
												case 23:
																this.multiply();
																break;
												case 24:
																this.divide();
																break;
												case 25:
																this.mp();
																break;
												case 26:
																this.mm();
																break;
												case 27:
																this.dp();
																break;
												case 28:
																this.dm();
																break;
												case 29:
																var r = Math.random() * 7;
																var rr = Math.round(r);
																switch (rr) {
																				case 0:
																								this.plus();
																								break;
																				case 1:
																								this.minus();
																								break;
																				case 2:
																								this.multiply();
																								break;
																				case 3:
																								this.divide();
																								break;
																				case 4:
																								this.mp();
																								break;
																				case 5:
																								this.mm();
																								break;
																				case 6:
																								this.dp();
																								break;
																				case 7:
																								this.dm();
																								break;
																}
																break;
								}
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
																}, 1);
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
																}, 1);
																cc.log("Your answer is wrong");
												}
												this.input = "";
												this.lable_input.string = this.input;
												if (this.seq != this.total + 1) this.defaultGame();else {
																cc.sys.localStorage.setItem('errorbook2', JSON.stringify(this.errorbook)); //存储所有错题
																cc.sys.localStorage.setItem('erbkanswer2', JSON.stringify(this.erbkanswer)); //存储错题答案
																cc.sys.localStorage.setItem('wronganswer2', JSON.stringify(this.wronganswer)); //存储错误答案
																cc.sys.localStorage.setItem('allexercise', JSON.stringify(this.allexercise)); //存储所有题目
																cc.sys.localStorage.setItem('allinput', JSON.stringify(this.allinput)); //存储用户所有输入
																cc.sys.localStorage.setItem('rw', JSON.stringify(this.rw)); //存储用户做题情况
																cc.sys.localStorage.setItem('allanswer', JSON.stringify(this.allanswer)); //存储用户做题情况
																cc.director.loadScene("result_detail");
												} //在这里跳到结果页面
								}
				},

				bt_skip_Clicked: function bt_skip_Clicked() {
								this.allexercise.push(this.lable.string);
								this.allinput.push(0);
								this.rw.push(0);
								this.allanswer.push(this.answer);
								this.refreshSeq();
								Alert.show("别担心，稍后可以在错题中查看答案哦^_^", null, false);
								if (this.seq != this.total + 1) this.defaultGame();else {
												cc.sys.localStorage.setItem('errorbook2', JSON.stringify(this.errorbook)); //存储所有错题
												cc.sys.localStorage.setItem('erbkanswer2', JSON.stringify(this.erbkanswer)); //存储错题答案
												cc.sys.localStorage.setItem('wronganswer2', JSON.stringify(this.wronganswer)); //存储错误答案
												cc.sys.localStorage.setItem('allexercise', JSON.stringify(this.allexercise)); //存储所有题目
												cc.sys.localStorage.setItem('allinput', JSON.stringify(this.allinput)); //存储用户所有输入
												cc.sys.localStorage.setItem('rw', JSON.stringify(this.rw)); //存储用户做题情况
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
								this.lbSeq.string = this.seq.toString();
								this.lbScore.node.stopAllActions();
								this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.3, 1.3), cc.scaleTo(0.1, 1, 1)));
				},

				plus: function plus() {
								//两位数加两位数的加法（和在一百以内的）
								var randnum1 = 0; //第一个加数 
								var number1; //第一个加数 取整
								var randnum2 = 0; //第二个加数
								var number2; //第二个加数 取整
								while (randnum1 < 10) {
												randnum1 = Math.random() * 89;
								} //生成10-89的随机数
								number1 = Math.round(randnum1);
								while (randnum2 < 10) {
												randnum2 = Math.random() * (89 - number1);
								} //生成10-89的随机数
								number2 = Math.round(randnum2);
								this.lable.string = number1.toString() + "+" + number2.toString() + "="; //题目字符串
								this.answer = number1 + number2; //答案
								cc.log("答案是" + this.answer.toString());
				},

				minus: function minus() {
								//两位数减两位数的减法
								var randnum1 = 0; //第一个加数 
								var number1; //第一个加数 取整
								var randnum2 = 0; //第二个加数
								var number2; //第二个加数 取整
								while (randnum1 < 10) {
												randnum1 = Math.random() * 99;
								} //生成10-99的随机数
								number1 = Math.round(randnum1);
								while (randnum2 < 10) {
												randnum2 = Math.random() * number1;
								} //生成10-number1的随机数
								number2 = Math.round(randnum2);
								this.lable.string = number1.toString() + "-" + number2.toString() + "="; //题目字符串
								this.answer = number1 - number2; //答案
								cc.log("答案是" + this.answer.toString());
				},

				multiply: function multiply() {
								//9以内的乘法口诀
								var randnum1 = 0; //乘数
								var number1; //第一个乘数 取整
								var randnum2 = 0; //第二个乘数
								var number2; //第二个乘数 取整
								randnum1 = Math.random() * 10; //生成0-10的随机数
								number1 = Math.round(randnum1);
								randnum2 = Math.random() * 10; //生成0-10的随机数
								number2 = Math.round(randnum2);
								this.lable.string = number1.toString() + "×" + number2.toString() + "="; //题目字符串
								this.answer = number1 * number2; //答案
								cc.log("答案是" + this.answer.toString());
				},

				primeFactors: function primeFactors(n) {
								var c = 0;
								var factors = [];
								while (c <= n) {
												if (n % c == 0) {
																factors.push(c);
																c++;
												} else {
																c++;
												}
								}
								cc.log(factors);
								return factors;
				},

				divide: function divide() {
								//9以内的除法口诀
								var randnum1 = 0; //被除数
								var number1; //被除数 取整
								var randnum2 = 0; //除数
								var number2; //除数 取整
								while (randnum1 < 3) {
												randnum1 = Math.random() * 10;
								} //生成1-10的随机数
								number1 = Math.round(randnum1);
								cc.log(number1 + "number1");
								var s = this.primeFactors(number1);
								cc.log(s + "s");
								while (randnum2 <= 0) {
												randnum2 = Math.random() * (s.length - 1);
								} //生成1-s.length的随机数
								cc.log(s.length + "s.length");
								randnum2 = Math.round(randnum2);
								number2 = s[randnum2];
								cc.log(number2 + "number2");
								this.lable.string = number1.toString() + "÷" + number2.toString() + "="; //题目字符串
								this.answer = number1 / number2; //答案
								cc.log("答案是" + this.answer.toString());
				},

				mp: function mp() {
								//乘法和加法混合
								var randnum1 = 0;
								var number1;
								var randnum2 = 0;
								var number2;
								var randnum3 = 0;
								var number3;
								var number4;
								randnum1 = Math.random() * 10; //生成0-9的随机数
								number1 = Math.round(randnum1);
								randnum2 = Math.random() * 10; //生成0-9的随机数
								number2 = Math.round(randnum2);
								randnum3 = Math.random() * 100; //生成0-99的随机数
								number3 = Math.round(randnum3);
								var m = Math.random();
								number4 = Math.round(m); //题目结构随机
								cc.log("m=", m);

								if (number4 == 0) this.lable.string = number1.toString() + "×" + number2.toString() + "+" + number3.toString() + "="; //题目字符串
								else this.lable.string = number3.toString() + "+" + number1.toString() + "×" + number2.toString() + "="; //题目字符串
								this.answer = number1 * number2 + number3; //答案
								cc.log("答案是" + this.answer.toString());
				},

				mm: function mm() {
								//乘法和减法混合
								var randnum1 = 0;
								var number1;
								var randnum2 = 0;
								var number2;
								var randnum3 = 0;
								var number3;
								randnum1 = Math.random() * 10; //生成0-9的随机数
								number1 = Math.round(randnum1);
								randnum2 = Math.random() * 10; //生成0-9的随机数
								number2 = Math.round(randnum2);
								randnum3 = Math.random() * (number1 * number2); //生成0-99的随机数
								number3 = Math.round(randnum3);
								this.lable.string = number1.toString() + "×" + number2.toString() + "-" + number3.toString() + "="; //题目字符串
								this.answer = number1 * number2 - number3; //答案
								cc.log("答案是" + this.answer.toString());
				},

				dp: function dp() {
								//除法和加法混合
								var randnum1 = 0; //被除数
								var number1; //被除数 取整
								var randnum2 = 0; //除数
								var number2; //除数 取整
								var randnum3 = 0;
								var number3;
								while (randnum1 < 3) {
												randnum1 = Math.random() * 100;
								} //生成0-99的随机数
								number1 = Math.round(randnum1);
								var s = this.primeFactors(number1);
								while (randnum2 <= 0) {
												randnum2 = Math.random() * (s.length - 1);
								} //生成0-s.length的随机数
								randnum2 = Math.round(randnum2);
								number2 = s[randnum2];
								randnum3 = Math.random() * 100; //生成0-99的随机数
								number3 = Math.round(randnum3);
								this.lable.string = number1.toString() + "÷" + number2.toString() + "+" + number3.toString() + "="; //题目字符串
								this.answer = number1 / number2 + number3; //答案
								cc.log("答案是" + this.answer.toString());
				},

				dm: function dm() {
								//除法和减法混合
								var randnum1 = 0; //被除数
								var number1; //被除数 取整
								var randnum2 = 0; //除数
								var number2; //除数 取整
								var randnum3 = 0;
								var number3;
								while (randnum1 < 3) {
												randnum1 = Math.random() * 100;
								} //生成0-99的随机数
								number1 = Math.round(randnum1);
								var s = this.primeFactors(number1);
								while (randnum2 <= 0) {
												randnum2 = Math.random() * (s.length - 1);
								} //生成0-s.length的随机数
								randnum2 = Math.round(randnum2);
								number2 = s[randnum2];
								randnum3 = Math.random() * (number1 / number2); //生成0-99的随机数
								number3 = Math.round(randnum3);
								this.lable.string = number1.toString() + "÷" + number2.toString() + "-" + number3.toString() + "="; //题目字符串
								this.answer = number1 / number2 - number3; //答案
								cc.log("答案是" + this.answer.toString());
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
        //# sourceMappingURL=fill-in-blanks-2.js.map
        