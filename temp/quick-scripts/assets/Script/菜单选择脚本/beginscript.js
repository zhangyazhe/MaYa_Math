(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/菜单选择脚本/beginscript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '63580AqQ9xO7InJXyXLpYL8', 'beginscript', __filename);
// Script/菜单选择脚本/beginscript.js

"use strict";

/***********************************************************************************************************************************
功能：初始界面跳转
**********************************************************************************************************************************/

cc.Class({
    extends: cc.Component,

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
        //# sourceMappingURL=beginscript.js.map
        