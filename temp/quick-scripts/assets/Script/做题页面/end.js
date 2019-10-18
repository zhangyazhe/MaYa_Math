(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/做题页面/end.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e07114cEsJGeo8MdwmyymYT', 'end', __filename);
// Script/做题页面/end.js

"use strict";

/***********************************************************************************************************************************
功能：结束练习
**********************************************************************************************************************************/

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:


    bt_end_Clicked: function bt_end_Clicked() {
        //结束练习
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
        //# sourceMappingURL=end.js.map
        