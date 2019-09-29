"use strict";
cc._RF.push(module, '3cd84nMzYVFoYu3H/gYvJT3', 'result');
// Script/result.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		Score: {
			default: null,
			type: cc.Label
		},
		lbTime: {
			default: null,
			type: cc.Label
		},
		mark: {
			default: null,
			type: cc.Node

		},
		Right: {
			default: null,
			type: cc.Prefab
		},
		Wrong: {
			default: null,
			type: cc.Prefab
		}
	},

	onLoad: function onLoad() {
		//this.exercise=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0];
		this.wSpace = 120;
		this.hSpace = 130;
		this.rnumber = 0;
		//获取常驻结点
		var node = cc.director.getScene().getChildByName('main_persistNode');
		var data = node.getComponent('main_persist').getdata();
		this.exercise = data;
		this.lbTime.string = this.exercise[30].toString();
	},
	start: function start() {
		this.rnumber = 0;
		this.defaultGame();
	},


	defaultGame: function defaultGame() {
		this.mark.removeAllChildren();
		var expOne;
		var i = 1;
		while (i <= 30) {
			if (this.exercise[i - 1]) {
				expOne = cc.instantiate(this.Right);
				expOne.x = -200 + ((i - 1) % 5 - 1) * this.wSpace;
				expOne.y = 300 - (i - i % 5) / 5 * this.hSpace;
				if (i % 5 == 0) expOne.y = expOne.y + this.hSpace;
				this.mark.addChild(expOne);
				this.rnumber++;
			} else {
				expOne = cc.instantiate(this.Wrong);
				expOne.x = -200 + ((i - 1) % 5 - 1) * this.wSpace;
				expOne.y = 300 - (i - i % 5) / 5 * this.hSpace;
				if (i % 5 == 0) expOne.y = expOne.y + this.hSpace;
				this.mark.addChild(expOne);
			}
			i = i + 1;
			this.Score.string = this.rnumber.toString();
		}
	}

});

cc._RF.pop();