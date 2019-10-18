cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
    },
    //自定义的两个函数。将值保存在this变量里
    setdata : function(json){
        this.data = json;  
    },
    getdata : function(){
        return this.data;  
    },

});
