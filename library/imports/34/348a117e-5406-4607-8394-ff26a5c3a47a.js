"use strict";
cc._RF.push(module, '348a1F+VAZGB4OU/yalw6R6', 'btn');
// Script/菜单选择脚本/btn.js

"use strict";

/***********************************************************************************************************************************
功能：初始界面跳转
**********************************************************************************************************************************/

cc.Class({
    extends: cc.Component,

    properties: {},

    toScene: function toScene() {
        cc.director.loadScene("lxymenu");
    }

});

cc._RF.pop();