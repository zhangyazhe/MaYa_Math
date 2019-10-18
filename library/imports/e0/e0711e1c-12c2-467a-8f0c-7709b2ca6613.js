"use strict";
cc._RF.push(module, 'e07114cEsJGeo8MdwmyymYT', 'end');
// Script/做题页面/end.js

"use strict";

/***********************************************************************************************************************************
功能：结束练习
**********************************************************************************************************************************/

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:


    bt_end_Clicked: function bt_end_Clicked() {
        //结束练习
        cc.director.loadScene("lxymenu");
    }
});

cc._RF.pop();