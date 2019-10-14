(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/choose or blank.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6e53dNALxxI9ZFc39o+Jl6c', 'choose or blank', __filename);
// Script/choose or blank.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        this.xuanze = 0;
    },
    start: function start() {},


    tochoose: function tochoose() {
        this.xuanze = 1;
        cc.sys.localStorage.setItem('xuanze', JSON.stringify(this.xuanze)); //存储用户要做选择题还是填空题
        cc.director.loadScene("SetNum");
    },

    toblank: function toblank() {
        this.xuanze = 0;
        cc.sys.localStorage.setItem('xuanze', JSON.stringify(this.xuanze)); //存储用户要做选择题还是填空题
        cc.director.loadScene("SetNum");
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
        //# sourceMappingURL=choose or blank.js.map
        