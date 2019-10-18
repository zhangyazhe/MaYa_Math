"use strict";
cc._RF.push(module, '6654d8L/phBBKFP+HXA9Jpt', 'grade1_exercise_type');
// Script/菜单选择脚本/grade1_exercise_type.js

'use strict';

cc.Class({
   extends: cc.Component,

   properties: {},

   onLoad: function onLoad() {
      //获取本地储存的错题序号信息，若无错题则无法进入错题本
      this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
      this.choose = 0;
   },
   start: function start() {},


   toGrd1: function toGrd1() {
      cc.director.loadScene("SetNum");
      this.choose = 11;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd2: function toGrd2() {
      cc.director.loadScene("SetNum");
      this.choose = 12;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd3: function toGrd3() {
      cc.director.loadScene("SetNum");
      this.choose = 13;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd4: function toGrd4() {
      cc.director.loadScene("SetNum");
      this.choose = 14;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd5: function toGrd5() {
      cc.director.loadScene("SetNum");
      this.choose = 15;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd6: function toGrd6() {
      cc.director.loadScene("SetNum");
      this.choose = 16;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd7: function toGrd7() {
      cc.director.loadScene("SetNum");
      this.choose = 17;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd8: function toGrd8() {
      cc.director.loadScene("SetNum");
      this.choose = 18;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd9: function toGrd9() {
      cc.director.loadScene("SetNum");
      this.choose = 19;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   }
});

cc._RF.pop();