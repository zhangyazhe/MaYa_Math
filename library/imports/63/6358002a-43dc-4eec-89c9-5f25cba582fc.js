"use strict";
cc._RF.push(module, '63580AqQ9xO7InJXyXLpYL8', 'beginscript');
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