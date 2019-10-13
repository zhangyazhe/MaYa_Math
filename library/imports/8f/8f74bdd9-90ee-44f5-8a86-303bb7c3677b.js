"use strict";
cc._RF.push(module, '8f74b3ZkO5E9YqGMDu3w2d7', 'setNum');
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