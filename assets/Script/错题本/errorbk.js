/***********************************************************************************************************************************
功能：实现错题练习功能
**********************************************************************************************************************************/

cc.Class({
    extends: cc.Component,

    properties: {
        lable: {
            //用于向用户展示题目
            default: null,
            type: cc.Label
        },

        lable_input: {
            //用于显示用户通过键盘输入的数
            default: null,
            type: cc.Label
        },

        lbTime: {//显示时间
            default: null,
            type: cc.Label
        },

        lbScore: {//显示正确的题目数量
            default: null,
            type: cc.Label
        },

        lbSeq: {//显示题号
            default: null,
            type: cc.Label
        },

        lbSeqTotal:{//总题目数
            default: null,
            type: cc.Label
        },
		
		Right:{//正确预制体
			default: null,
            type: cc.Prefab
		},
		
		Wrong:{//错误预制体
			default: null,
            type: cc.Prefab
		},
		
		mark: {//预制体父结点
			default: null,
            type : cc.Node
 
        },
		
		right_audio: {//回答正确声音
			default: null,
			type: cc.AudioClip
		},
		
		wrong_audio: {//回答错误声音
			default: null,
			type: cc.AudioClip
		}
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.input;//用户使用键盘输入的字符串
        this.answer;//题目的标准答案
        this.choose;//记录用户选择的题目类型
        this.timecnt = 0;//记录时间
        this.score;//记录做对的题目数量
        this.seq;//记录题号
		this.allexercise = [];//记录所有的题目
		this.allinput = [];//记录用户所有的答案
		this.allanswer = [];//记录所有的答案
        this.rw = [];//记录用户的做题情况
        this.errorbook1 = [];//记录用户一年级错题
        this.errorbook2 = [];//记录用户二年级错题
        this.errorbook3 = [];//记录用户三年级错题
        this.erbkanswer1 = [];//记录一年级错题答案
        this.erbkanswer2 = [];//记录二年级错题答案
        this.erbkanswer3 = [];//记录三年级错题答案
        this.errorbook = [];//本次用户选择的年纪的错题本
        this.wrong_input1 = []
        this.wrong_input2 = []
        this.wronginput3 = []
    },

    start () {
        cc.log("start to run");
        this.input = "";
        this.answer = "";
        this.choose = JSON.parse(cc.sys.localStorage.getItem('errorbook_choose'));
        this.score = 0;
        this.errorbook1 = JSON.parse(cc.sys.localStorage.getItem('errorbook1'));//加载一年级错题本
        this.errorbook2 = JSON.parse(cc.sys.localStorage.getItem('errorbook2'));//加载二年级错题本
        this.errorbook3 = JSON.parse(cc.sys.localStorage.getItem('errorbook3'));//加载三年级错题本
        this.erbkanswer1 = JSON.parse(cc.sys.localStorage.getItem('erbkanswer1'));//加载一年级错题本
        this.erbkanswer2 = JSON.parse(cc.sys.localStorage.getItem('erbkanswer2'));//加载二年级错题本
        this.erbkanswer3 = JSON.parse(cc.sys.localStorage.getItem('erbkanswer3'));//加载三年级错题本
        this.wrong_input1 = JSON.parse(cc.sys.localStorage.getItem('wronganswer1'));//一年级的错题对应的错误答案
        this.wrong_input2 = JSON.parse(cc.sys.localStorage.getItem('wronganswer2'));//二年级的错题对应的错误答案
        this.wrong_input3 = JSON.parse(cc.sys.localStorage.getItem('wronganswer3'));//三年级的错题对应的错误答案
        this.schedule(this.doCountTime,1);//计时
        this.seq = 1;
        if(this.choose == 1){					//选择的是一年级
            this.errorbook = this.errorbook1;
        }else if(this.choose == 2){				//选择的是二年级
            this.errorbook = this.errorbook2;
        }else if(this.choose == 3){				//选择的是三年级
            this.errorbook = this.errorbook3;
        }
        this.defaultGame();

    },

    //计时
    doCountTime(){
        //每秒更新显示信息
        this.timecnt += 1;
        //刷新lable
        this.lbTime.string = this.timecnt.toString();
    },

    defaultGame:function(){
        //每一类错题的代码逻辑
        switch(this.choose){
            case 1:
                this.erbk1();
                break;
            case 2:
                this.erbk2();
                break;
            case 3:
                this.erbk3();
                break;
        }
    },    

        erbk1:function(){//一年级错题本
            this.lbSeqTotal.string = this.errorbook1.length.toString();
            var string = this.errorbook1[this.seq-1];
            cc.sys.localStorage.setItem('total', JSON.stringify(this.errorbook1.length));		
            this.lable.string=string;
          this.answer=this.erbkanswer1[this.seq-1];
            cc.log(this.errorbook1[this.seq-1]);
            cc.log("The answer is "+this.erbkanswer);
        },

        erbk2:function(){//二年级错题本
            this.lbSeqTotal.string = this.errorbook2.length.toString();
            var string = this.errorbook2[this.seq-1];
            cc.sys.localStorage.setItem('total', JSON.stringify(this.errorbook2.length));
            this.lable.string=string;
          this.answer=this.erbkanswer2[this.seq-1];
            cc.log("The answer is "+this.erbkanswer);
        },

        erbk3:function(){//三年级错题本
            this.lbSeqTotal.string = this.errorbook3.length.toString();
            var string = this.errorbook3[this.seq-1];
            cc.sys.localStorage.setItem('total', JSON.stringify(this.errorbook3.length));
            this.lable.string=string;
          this.answer=this.erbkanswer3[this.seq-1];
            cc.log("The answer is "+this.erbkanswer);
        },


    bt1_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "1";
        this.lable_input.string = this.input;
    },

    bt2_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "2";
        this.lable_input.string = this.input;
    },

    bt3_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "3";
        this.lable_input.string = this.input;
    },
    bt4_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "4";
        this.lable_input.string = this.input;
    },
    
    bt5_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "5";
        this.lable_input.string = this.input;
    },
    
    bt6_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "6";
        this.lable_input.string = this.input;
    },
    
    bt7_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "7";
        this.lable_input.string = this.input;
    },
    
    bt8_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "8";
        this.lable_input.string = this.input;
    },
    
    bt9_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "9";
        this.lable_input.string = this.input;
    },
    
    bt0_Clicked:function(){
        if(this.input.length < 10)//最多允许用户输入10位
            this.input += "0";
        this.lable_input.string = this.input;
    },

    bt_dot_Clicked:function(){//小数点按钮
        if(this.input.length < 10 && this.input.length >0)//最多允许用户输入10位
            this.input += ".";
        this.lable_input.string = this.input;
    },

    bt_delete_Clicked:function(){//删除字符按钮
        if(this.input.length > 0){
            this.input = this.input.substring(0, this.input.length-1);
        }
        this.lable_input.string = this.input;
    },

    bt_commit_Clicked:function(){//提交答案按钮
		var expOne;
        if(this.input.length == 0){
            Alert.show("你还没有填写答案，不能提交哦", null, false);
        }
        else{
            cc.log("commit successfully");
			cc.log("题目 "+this.lable);
			this.allexercise.push(this.lable.string);
			this.allinput.push(this.input);
			this.allanswer.push(this.answer);
			this.refreshSeq();
            if(this.answer == this.input){
				this.current=cc.audioEngine.play(this.right_audio, false, 0.6)
                cc.log("Your answer is right");
				expOne = cc.instantiate(this.Right);
				expOne.x= 0;
				expOne.y= 0;
				this.mark.addChild(expOne);
				this.scheduleOnce(function() {
				// 这里的 this 指向 component
				this.mark.removeChild(expOne);
				}, 1);
				this.rw.push(1);
                this.refreshScore();
            }else{
				this.current=cc.audioEngine.play(this.wrong_audio, false, 0.6);
				expOne = cc.instantiate(this.Wrong);
				expOne.x= 0;
				expOne.y= 0;
				this.rw.push(0);
				this.mark.addChild(expOne);
				this.scheduleOnce(function() {
				// 这里的 this 指向 component
				this.mark.removeChild(expOne);
				}, 1);
                cc.log("Your answer is wrong");
            }
            this.input = "";
            this.lable_input.string = this.input;
			if(this.seq != this.errorbook.length + 1)
				this.defaultGame();
			else{
				cc.sys.localStorage.setItem('allexercise', JSON.stringify(this.allexercise));			//存储所有题目
				cc.sys.localStorage.setItem('allinput', JSON.stringify(this.allinput));			//存储用户所有输入
				cc.sys.localStorage.setItem('rw', JSON.stringify(this.rw));			//存储用户做题情况
				cc.sys.localStorage.setItem('allanswer', JSON.stringify(this.allanswer));			//存储用户做题情况
				cc.director.loadScene("result_detail");}//在这里跳到结果页面
        }
        
    },

    bt_skip_Clicked:function(){//跳过该题目
		this.allexercise.push(this.lable.string);
		this.allinput.push(0);
		this.rw.push(0);
		this.allanswer.push(this.answer);
        this.refreshSeq();
        Alert.show("别担心，稍后可以在错题中查看答案哦^_^", null, false);
        if(this.seq != this.errorbook.length + 1)
				this.defaultGame();
			else{
				cc.sys.localStorage.setItem('allexercise', JSON.stringify(this.allexercise));			//存储所有题目
				cc.sys.localStorage.setItem('allinput', JSON.stringify(this.allinput));			//存储用户所有输入
				cc.sys.localStorage.setItem('rw', JSON.stringify(this.rw));			//存储用户做题情况
				cc.director.loadScene("result_detail");//在这里跳到结果页面
			}
    },

    bt_delete_Clicked:function(){//删除错题
        //delete this.errorbook[this.seq-1];
        var dele = this.errorbook.splice(this.seq-1, 1)
        this.lbSeqTotal.string = this.errorbook.length.toString();
        if(this.choose == 1){//一年级
            cc.sys.localStorage.setItem('errorbook1', JSON.stringify(this.errorbook));		
            var dele = this.erbkanswer1.splice(this.seq-1, 1)
            cc.sys.localStorage.setItem('erbkanswer1', JSON.stringify(this.erbkanswer1));	
            var dele = this.wrong_input1.splice(this.seq-1, 1)
            cc.sys.localStorage.setItem('wronganswer1', JSON.stringify(this.wrong_input1));		

        }else if(this.choose == 2){//二年级
            cc.sys.localStorage.setItem('errorbook2', JSON.stringify(this.errorbook));	
            var dele = this.erbkanswer2.splice(this.seq-1, 1)
            cc.sys.localStorage.setItem('erbkanswer2', JSON.stringify(this.erbkanswer2));	
            var dele = this.wrong_input2.splice(this.seq-1, 1)
            cc.sys.localStorage.setItem('wronganswer2', JSON.stringify(this.wrong_input2));		
        }else if(this.choose == 3){//三年级
            cc.sys.localStorage.setItem('errorbook3', JSON.stringify(this.errorbook));
            var dele = this.erbkanswer3.splice(this.seq-1, 1)
            cc.sys.localStorage.setItem('erbkanswer3', JSON.stringify(this.erbkanswer3));	
            var dele = this.wrong_input3.splice(this.seq-1, 1)
            cc.sys.localStorage.setItem('wronganswer3', JSON.stringify(this.wrong_input3));			
        }
        this.defaultGame();
    },

    bt_end_Clicked:function(){		//结束错题练习
        cc.director.loadScene("lxymenu");
    },

    //刷新得分
    refreshScore:function(){
        this.score ++;
        this.lbScore.string = this.score.toString();
        this.lbScore.node.stopAllActions();
        this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1,1.3,1.3),cc.scaleTo(0.1,1,1)));
    },
    //刷新题号
    refreshSeq:function(){
        this.seq ++;
        this.lbSeq.string = this.seq.toString();
        this.lbScore.node.stopAllActions();
        this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1,1.3,1.3),cc.scaleTo(0.1,1,1)));
    },
});
