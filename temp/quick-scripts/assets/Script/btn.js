(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/btn.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '685ce8p9XtKf5G8vXwbsL+Z', 'btn', __filename);
// Script/btn.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // start () {
    //     this.toScene();
    // },

    toScene: function toScene() {
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
        //# sourceMappingURL=btn.js.map
        