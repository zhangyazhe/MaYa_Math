/***********************************************************************************************************************************
菜单列表：三年级的可练习的种类
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
		this.choose = 31;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd2: function(){
        cc.director.loadScene("SetNum");
		this.choose = 32;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd3: function(){
        cc.director.loadScene("SetNum");
		this.choose = 33;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
        
     },

     toGrd4: function(){
        cc.director.loadScene("SetNum");
		this.choose = 34;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd5: function(){
        cc.director.loadScene("SetNum");
		this.choose = 35;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd6: function(){
        cc.director.loadScene("SetNum");
		this.choose = 36;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     }
});
