cc.Class({
    extends: cc.Component,
    properties: {        
    },
    onLoad(){
        this.lbSeqTotal=0;
		this.choose=0;
    },
    start () {
        
    },
	
	jumpscene: function(){  
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
				cc.director.loadScene("fill-in-blanks-1");
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
				cc.director.loadScene("fill-in-blanks-2");
				break;
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
				cc.director.loadScene("fill-in-blanks-3");
				break;
			
		}
     },
	
	
    setNum10: function(){  
		this.lbSeqTotal = 10;
		cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal));			//存储用户选择
        this.jumpscene();
     },

    setNum30: function(){
		this.lbSeqTotal = 30;
		cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal));			//存储用户选择
        this.jumpscene();
    },

    setNum50: function(){
		this.lbSeqTotal = 50;
		cc.sys.localStorage.setItem('total', JSON.stringify(this.lbSeqTotal));			//存储用户选择
        this.jumpscene();
     },

    back: function(){
        cc.director.loadScene("lxymenu")
     },

    
});
