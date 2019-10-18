(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/菜单选择脚本/setNum.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '30c70WcxSBBQYcHg8hTcRb5', 'setNum', __filename);
// Script/菜单选择脚本/setNum.js

"use strict";

/***********************************************************************************************************************************
菜单列表：用户选择要做的题目数（10、30或50）
**********************************************************************************************************************************/

cc.Class({
				extends: cc.Component,
				properties: {},
				onLoad: function onLoad() {
								this.lbSeqTotal = 0; //总共题目数
								this.choose = 0; //用户对于题目类型的选择
				},
				start: function start() {},


				jumpscene: function jumpscene() {
								//根据用户选择的题目类型跳转场景
								this.choose = JSON.parse(cc.sys.localStorage.getItem('choose'));
								switch (this.choose) {
												case 11:
												case 12:
												case 13:
												case 14:
												case 15:
												case 16:
												case 17:
												case 18:
												case 19:
																cc.director.loadScene("fill-in-blanks-1"); //一年级的场景
																break;
												case 21:
												case 22:
												case 23:
												case 24:
												case 25:
												case 26:
												case 27:
												case 28:
												case 29:
																cc.director.loadScene("fill-in-blanks-2"); //二年级的场景
																break;
												case 31:
												case 32:
												case 33:
												case 34:
												case 35:
												case 36:
																cc.director.loadScene("fill-in-blanks-3"); //三年级的场景
																break;

								}
				},

				setNum10: function setNum10() {
								this.lbSeqTotal = 10; //10道题
								cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal)); //存储用户选择
								this.jumpscene();
				},

				setNum30: function setNum30() {
								this.lbSeqTotal = 30; //30道题
								cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal)); //存储用户选择
								this.jumpscene();
				},

				setNum50: function setNum50() {
								this.lbSeqTotal = 50; //50道题
								cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal)); //存储用户选择
								this.jumpscene();
				},

				back: function back() {
								cc.director.loadScene("lxymenu"); //回到开始界面
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
        //# sourceMappingURL=setNum.js.map
        