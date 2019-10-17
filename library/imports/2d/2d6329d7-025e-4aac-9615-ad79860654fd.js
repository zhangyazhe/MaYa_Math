"use strict";
cc._RF.push(module, '2d632nXAl5KrJYVrXmGBlT9', 'menuscript');
// Script/menuscript.js

"use strict";

cc.Class({
   extends: cc.Component,

   properties: {},

   onLoad: function onLoad() {
      //获取本地储存的错题序号信息，若无错题则无法进入错题本
      //this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));

   },
   start: function start() {},


   toGrd1: function toGrd1() {
      cc.director.loadScene("exercise type-1");
   },

   toGrd2: function toGrd2() {
      cc.director.loadScene("exercise type-2");
   },

   toGrd3: function toGrd3() {
      cc.director.loadScene("exercise type-3");
   },
   toErb: function toErb() {
      cc.director.loadScene("error_abstract");
   }

});

cc._RF.pop();