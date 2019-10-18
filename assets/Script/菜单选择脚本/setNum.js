/***********************************************************************************************************************************
菜单列表：用户选择要做的题目数（10、30或50）
**********************************************************************************************************************************/

cc.Class({
    extends: cc.Component,
    properties: {        
    },
    onLoad(){
        this.lbSeqTotal=0;	//总共题目数
		this.choose=0;		//用户对于题目类型的选择
    },
    start () {
        
    },
	
	jumpscene: function(){  		//根据用户选择的题目类型跳转场景
		this.choose = JSON.parse(cc.sys.localStorage.getItem('choose'));
		switch(this.choose){
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
				cc.director.loadScene("fill-in-blanks-1");			//一年级的场景
				break;
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
				cc.director.loadScene("fill-in-blanks-2");			//二年级的场景
				break;
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
				cc.director.loadScene("fill-in-blanks-3");			//三年级的场景
				break;
			
		}
     },
	
	
    setNum10: function(){  
		this.lbSeqTotal = 10;//10道题
		cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal));			//存储用户选择
        this.jumpscene();
     },

    setNum30: function(){
		this.lbSeqTotal = 30;//30道题
		cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal));			//存储用户选择
        this.jumpscene();
    },

    setNum50: function(){
		this.lbSeqTotal = 50;//50道题
		cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal));			//存储用户选择
        this.jumpscene();
     },

    back: function(){
        cc.director.loadScene("lxymenu")												//回到开始界面
     },

    
});
