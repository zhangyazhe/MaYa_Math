"use strict";
cc._RF.push(module, '0b75c97JG9FU6AWsbL6TtBm', 'errorscript');
// Script/errorscript.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		questionList: {
			default: null,
			type: cc.Node
		},

		CurrentNum: {
			default: null,
			type: cc.Label
		},

		TotalNum: {
			default: null,
			type: cc.Label
		},

		Answer: {
			default: null,
			type: cc.Label
		}
	},

	// LIFE-CYCLE CALLBACKS:

	onLoad: function onLoad() {
		//获取本地储存的错题序号信息
		this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
		//隐藏答案节点
		this.Answer.node.active = false;
	},
	start: function start() {
		this.defaultGame();
		cc.log("start to run");
	},


	defaultGame: function defaultGame() {
		this.seq = 0;
		//显示错题
		this.ErrorQuestion(this.seq);
		//cc.sys.localStorage.setItem("error", error);			//储存错题
	},

	ErrorQuestion: function ErrorQuestion(i) {
		var _this = this;

		var questionNum = Math.round(this.error_list[i] + 1001);
		this.CurrentNum.string = (i + 1).toString();
		this.TotalNum.string = this.error_list.length.toString();
		var url = "1/" + questionNum.toString();
		cc.loader.loadRes(url, cc.SpriteFrame, function (err, res) {
			//加载错误则报错
			if (err) {
				console.error(err);
				return;
			}
			//创建一个使用图片资源的新节点对象
			var starNode = new cc.Node(); //创建一个新节点
			//starNode.name = "star1";
			starNode.setPosition(0, 100); //创建位置
			var starSprite = starNode.addComponent(cc.Sprite); //增加精灵组件
			starSprite.spriteFrame = res; //设置精灵组件图片资源
			_this.questionList.addChild(starNode); //场景中增加新节点
		});
	},

	Clicked_next: function Clicked_next() {
		//下一题
		if (this.seq != this.error_list.length - 1) {
			++this.seq;
			this.Answer.node.active = false; //隐藏节点
			this.ErrorQuestion(this.seq);
			cc.log(this.error_list.toString());
		} else Alert.show("已为最后一题", null, false);
	},

	Clicked_last: function Clicked_last() {
		//上一题
		if (this.seq != 0) {
			//第一题不能回退
			--this.seq;
			this.Answer.node.active = false; //隐藏节点
		} else Alert.show("已为第一题", null, false);
		if (this.seq != this.error_list.length) {
			this.ErrorQuestion(this.seq);
			cc.log(this.error_list.toString());
		} else this.toScene();
	},

	Clicked_answer: function Clicked_answer() {
		//查看答案
		var sequence;
		sequence = this.error_list[this.seq]; //题号
		if (sequence >= 0 && sequence <= 49) this.Answer.string = "答案：A".toString();else if (sequence >= 50 && sequence <= 99) this.Answer.string = "答案：B".toString();else if (sequence >= 100 && sequence <= 149) this.Answer.string = "答案：C".toString();
		this.Answer.node.active = true;
	},

	toScene: function toScene() {
		cc.director.loadScene("lxybegin");
	},

	toMenu: function toMenu() {
		cc.director.loadScene("lxymenu");
	}
});

cc._RF.pop();