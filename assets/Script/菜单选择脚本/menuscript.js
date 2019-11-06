/***********************************************************************************************************************************
菜单列表：用户选择年级，进入对应年级的选题目类型界面
**********************************************************************************************************************************/


cc.Class({
    extends: cc.Component,

    properties: {
        
    },
	
    start () {

    },

     toGrd1: function(){
        cc.director.loadScene("exercise type-1")		//加载场景
     },

     toGrd2: function(){
        cc.director.loadScene("exercise type-2")		//加载场景
     },

     toGrd3: function(){
        cc.director.loadScene("exercise type-3");		//加载场景
        
     },
     toErb: function(){
         cc.director.loadScene("error_abstract");		//加载场景
     },

     back: function(){
      cc.director.loadScene("lxybegin")		//加载场景
   } 
});
