cc.Class({
    extends: cc.Component,

    properties: {
        
    },
	
	onLoad () {
		//获取本地储存的错题序号信息，若无错题则无法进入错题本
      this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
      
	},
	
    start () {

    },

     toGrd1: function(){
        cc.director.loadScene("exercise type-1")
     },

     toGrd2: function(){
        cc.director.loadScene("exercise type-2")
     },

     toGrd3: function(){
        cc.director.loadScene("exercise type-3");
        
     },
     toErb: function(){
		if(this.error_list == null)
			Alert.show("暂无错题", null, false);
		else
			cc.director.loadScene("error_list");
	 }
     
});
