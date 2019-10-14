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
        cc.director.loadScene("choose or blank");
		this.choose = 21;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd2: function(){
        cc.director.loadScene("choose or blank");
		this.choose = 22;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd3: function(){
        cc.director.loadScene("choose or blank");
		this.choose = 23;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
        
     },

     toGrd4: function(){
        cc.director.loadScene("choose or blank");
		this.choose = 24;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd5: function(){
        cc.director.loadScene("choose or blank");
		this.choose = 25;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },

     toGrd6: function(){
        cc.director.loadScene("choose or blank");
		this.choose = 26;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },
     
     toGrd7: function(){
        cc.director.loadScene("choose or blank");
		this.choose = 27;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },
	 
	 toGrd8: function(){
        cc.director.loadScene("choose or blank");
		this.choose = 28;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     },
     
	 toGrd9: function(){
        cc.director.loadScene("choose or blank");
		this.choose = 29;
		cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose));			//存储用户选择
     }
});
