cc.Class({
    extends: cc.Component,

    properties: {
        
    },
	
	onLoad () {
		//获取本地储存的错题序号信息，若无错题则无法进入错题本
		this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
	},
	
    start () {
		this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
    },

     toGrd1: function(){
        cc.director.loadScene("main_scene")
     },

     toGrd2: function(){
        cc.director.loadScene("main_scene")
     },

     toGrd3: function(){
        cc.director.loadScene("main_scene")
     },

     toGrd4: function(){
        cc.director.loadScene("main_scene")
     },

     toGrd5: function(){
        cc.director.loadScene("main_scene")
     },

     toGrd6: function(){
        cc.director.loadScene("main_scene")
     },
     
     toErb: function(){
		if(this.error_list.length != 0)
			cc.director.loadScene("error_list");
		else
			Alert.show("暂无错题", null, false);
	 }
     
});
