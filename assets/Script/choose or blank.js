cc.Class({
    extends: cc.Component,

    properties: {
        
    },
	
	onLoad () {
		this.xuanze = 0;
	},
	
    start () {
    },

     tochoose: function(){
		this.xuanze = 1 ;
		cc.sys.localStorage.setItem('xuanze', JSON.stringify(this.xuanze));			//存储用户要做选择题还是填空题
        cc.director.loadScene("SetNum")
     },

     toblank: function(){
		this.xuanze = 0 ;
		cc.sys.localStorage.setItem('xuanze', JSON.stringify(this.xuanze));			//存储用户要做选择题还是填空题
        cc.director.loadScene("SetNum")
     }
     
});
