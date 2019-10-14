"use strict";
cc._RF.push(module, '21f5eITtcJMSr6PWBFidPE2', 'grade3_exercise_type');
// Script/grade3_exercise_type.js

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
      cc.director.loadScene("choose or blank");
      this.choose = 31;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd2: function toGrd2() {
      cc.director.loadScene("choose or blank");
      this.choose = 32;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd3: function toGrd3() {
      cc.director.loadScene("choose or blank");
      this.choose = 33;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd4: function toGrd4() {
      cc.director.loadScene("choose or blank");
      this.choose = 34;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd5: function toGrd5() {
      cc.director.loadScene("choose or blank");
      this.choose = 35;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd6: function toGrd6() {
      cc.director.loadScene("choose or blank");
      this.choose = 36;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   }
});

cc._RF.pop();