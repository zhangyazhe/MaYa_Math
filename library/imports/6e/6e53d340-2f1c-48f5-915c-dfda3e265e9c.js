"use strict";
cc._RF.push(module, '6e53dNALxxI9ZFc39o+Jl6c', 'choose or blank');
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