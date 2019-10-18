"use strict";
cc._RF.push(module, '9599ePF19hMZKPAWJji44Wt', 'main_persist');
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