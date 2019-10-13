(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/setNum.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8f74b3ZkO5E9YqGMDu3w2d7', 'setNum', __filename);
// Script/setNum.js

"use strict";

cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad: function onLoad() {},
    start: function start() {},


    setNum10: function setNum10() {
        cc.director.loadScene("fill-in-blanks-3");
    },

    setNum30: function setNum30() {
        cc.director.loadScene("fill-in-blanks-3");
    },

    setNum50: function setNum50() {
        cc.director.loadScene("fill-in-blanks-3");
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
        