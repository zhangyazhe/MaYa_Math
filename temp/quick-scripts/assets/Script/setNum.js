(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/setNum.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8f74b3ZkO5E9YqGMDu3w2d7', 'setNum', __filename);
// Script/setNum.js

"use strict";

cc.Class({
				extends: cc.Component,
				properties: {},
				onLoad: function onLoad() {
								this.lbSeqTotal = 0;
								this.choose = 0;
				},
				start: function start() {},


				jumpscene: function jumpscene() {
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
																cc.director.loadScene("fill-in-blanks-1");
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
																cc.director.loadScene("fill-in-blanks-2");
																break;
												case 31:
												case 32:
												case 33:
												case 34:
												case 35:
												case 36:
																cc.director.loadScene("fill-in-blanks-3");
																break;

								}
				},

				setNum10: function setNum10() {
								this.lbSeqTotal = 10;
								cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal)); //存储用户选择
								this.jumpscene();
				},

				setNum30: function setNum30() {
								this.lbSeqTotal = 30;
								cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal)); //存储用户选择
								this.jumpscene();
				},

				setNum50: function setNum50() {
								this.lbSeqTotal = 50;
								cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal)); //存储用户选择
								this.jumpscene();
				},

				back: function back() {
								cc.director.loadScene("lxymenu");
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
        