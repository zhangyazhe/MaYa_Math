"use strict";
cc._RF.push(module, 'd2e5cQQTHVNL67XWwxX95MH', 'grade2_exercise_type');
// Script/grade2_exercise_type.js

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
      this.choose = 21;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd2: function toGrd2() {
      cc.director.loadScene("choose or blank");
      this.choose = 22;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd3: function toGrd3() {
      cc.director.loadScene("choose or blank");
      this.choose = 23;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd4: function toGrd4() {
      cc.director.loadScene("choose or blank");
      this.choose = 24;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd5: function toGrd5() {
      cc.director.loadScene("choose or blank");
      this.choose = 25;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd6: function toGrd6() {
      cc.director.loadScene("choose or blank");
      this.choose = 26;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd7: function toGrd7() {
      cc.director.loadScene("choose or blank");
      this.choose = 27;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd8: function toGrd8() {
      cc.director.loadScene("choose or blank");
      this.choose = 28;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd9: function toGrd9() {
      cc.director.loadScene("choose or blank");
      this.choose = 29;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   }
});

cc._RF.pop();