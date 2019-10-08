(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/menuscript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2d632nXAl5KrJYVrXmGBlT9', 'menuscript', __filename);
// Script/menuscript.js

"use strict";

cc.Class({
   extends: cc.Component,

   properties: {},

   onLoad: function onLoad() {
      //获取本地储存的错题序号信息，若无错题则无法进入错题本
      this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
   },
   start: function start() {},


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
      if (this.error_list == null) Alert.show("暂无错题", null, false);else cc.director.loadScene("error_list");
   }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=menuscript.js.map
        