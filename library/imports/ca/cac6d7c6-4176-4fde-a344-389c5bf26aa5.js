"use strict";
cc._RF.push(module, 'cac6dfGQXZP3qNEOJxb8mql', 'menuscript');
// Script/菜单选择脚本/menuscript.js

"use strict";

/***********************************************************************************************************************************
菜单列表：用户选择年级，进入对应年级的选题目类型界面
**********************************************************************************************************************************/

cc.Class({
    extends: cc.Component,

    properties: {},

    start: function start() {},


    toGrd1: function toGrd1() {
        cc.director.loadScene("exercise type-1"); //加载场景
    },

    toGrd2: function toGrd2() {
        cc.director.loadScene("exercise type-2"); //加载场景
    },

    toGrd3: function toGrd3() {
        cc.director.loadScene("exercise type-3"); //加载场景
    },
    toErb: function toErb() {
        cc.director.loadScene("error_abstract"); //加载场景
    }

});

cc._RF.pop();