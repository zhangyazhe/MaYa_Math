"use strict";
cc._RF.push(module, '2d632nXAl5KrJYVrXmGBlT9', 'menuscript');
// Script/menuscript.js

'use strict';

cc.Class({
   extends: cc.Component,

   properties: {},

   onLoad: function onLoad() {
      //获取本地储存的错题序号信息，若无错题则无法进入错题本
      this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
   },
   start: function start() {
      this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
   },


   toGrd1: function toGrd1() {
      cc.director.loadScene("main_scene");
   },

   toGrd2: function toGrd2() {
      cc.director.loadScene("main_scene");
   },

   toGrd3: function toGrd3() {
      cc.director.loadScene("main_scene");
   },

   toGrd4: function toGrd4() {
      cc.director.loadScene("main_scene");
   },

   toGrd5: function toGrd5() {
      cc.director.loadScene("main_scene");
   },

   toGrd6: function toGrd6() {
      cc.director.loadScene("main_scene");
   },

   toErb: function toErb() {
      if (this.error_list.length != 0) cc.director.loadScene("error_list");else Alert.show("暂无错题", null, false);
   }

});

cc._RF.pop();