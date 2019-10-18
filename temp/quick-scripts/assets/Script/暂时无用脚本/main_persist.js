(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/暂时无用脚本/main_persist.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9599ePF19hMZKPAWJji44Wt', 'main_persist', __filename);
// Script/暂时无用脚本/main_persist.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
    },
    //自定义的两个函数。将值保存在this变量里
    setdata: function setdata(json) {
        this.data = json;
    },
    getdata: function getdata() {
        return this.data;
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
        //# sourceMappingURL=main_persist.js.map
        