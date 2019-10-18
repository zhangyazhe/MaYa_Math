/***********************************************************************************************************************************
菜单列表：一年级的可练习的种类
**********************************************************************************************************************************/

cc.Class({
    extends: cc.Component,

    properties: {
        
    },
	
	onLoad () {
		//获取本地储存的错题序号信息，若无错题则无法进入错题本
      this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
      this.choose = 0;
	},
	
    start () {

    },

     toGrd1: function(){
        cc.director.loadScene("SetNum");
		this.choose = 11;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd2: function(){
        cc.director.loadScene("SetNum");
		this.choose = 12;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd3: function(){
        cc.director.loadScene("SetNum");
		this.choose = 13;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
        
     },

     toGrd4: function(){
        cc.director.loadScene("SetNum");
		this.choose = 14;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd5: function(){
        cc.director.loadScene("SetNum");
		this.choose = 15;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd6: function(){
        cc.director.loadScene("SetNum");
		this.choose = 16;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },
     
     toGrd7: function(){
        cc.director.loadScene("SetNum");
		this.choose = 17;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },
	 
	 toGrd8: function(){
        cc.director.loadScene("SetNum");
		this.choose = 18;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },
	 
	 toGrd9: function(){
        cc.director.loadScene("SetNum");
		this.choose = 19;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     }
});
