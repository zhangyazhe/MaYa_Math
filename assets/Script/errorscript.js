cc.Class({
    extends: cc.Component,

    properties: {
        questionList:{
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
		//获取本地储存的错题序号信息
		this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
	},

    start () {
		this.defaultGame();
        cc.log("start to run");
    },

	defaultGame:function(){
		this.seq = 0;
		//显示错题
		this.ErrorQuestion(this.seq);
		//cc.sys.localStorage.setItem("error", error);			//储存错题
    },
	
    ErrorQuestion:function(i){
        var questionNum = Math.round(this.error_list[i] + 1001);
		var url = "1/" + questionNum.toString();
		cc.loader.loadRes(url, cc.SpriteFrame, (err, res) => {
            //加载错误则报错
            if (err) {
                console.error(err);
                return;
            }
			//创建一个使用图片资源的新节点对象
        let starNode = new cc.Node(); //创建一个新节点
            //starNode.name = "star1";
        starNode.setPosition(0,0); //创建位置
        let starSprite = starNode.addComponent(cc.Sprite); //增加精灵组件
        starSprite.spriteFrame = res; //设置精灵组件图片资源
        this.questionList.addChild(starNode); //场景中增加新节点
        });
    },
	
	Clicked:function(){
        ++this.seq;
		if(this.seq != this.error_list.length){
            this.ErrorQuestion(this.seq);
			cc.log(this.error_list.toString());
        }
		else
			this.toScene();
    },
	
	toScene:function(){
        cc.director.loadScene("lxybegin");
    }
	
});
