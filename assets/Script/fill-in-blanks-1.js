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
		
		Right:{
			default: null,
            type: cc.Prefab
		},
		
		Wrong:{
			default: null,
            type: cc.Prefab
		},
		
		mark: {
			default: null,
            type : cc.Node
 
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
    },

    start () {
        cc.log("start to run");
        this.input = "";
        this.answer = "";
        this.choose = JSON.parse(cc.sys.localStorage.getItem('choose'));
        this.score = 0;
        this.defaultGame();
        this.schedule(this.doCountTime,1);//计时
        this.seq = 1;
		this.total = JSON.parse(cc.sys.localStorage.getItem('total'));
		this.lbSeqTotal.string= this.total.toString();
    },

    //计时
    doCountTime(){
        //每秒更新显示信息
        this.timecnt += 1;
        //刷新lable
        this.lbTime.string = this.timecnt.toString();
    },

    defaultGame:function(){
        //每一类题型的代码逻辑
        switch(this.choose){
            case 11:
                this.level_11();
                break;
            case 12:
                this.level_12();
                break;
            case 13:
                this.level_13();
                break;
            case 14:
                this.level_14();
                break;
            case 15:
                this.level_15();
                break;
            case 16:
                this.level_16();
                break;
            case 17:
                this.level_17();
                break;
			case 18:
                this.level_18();
                break;
            case 19:
                var op=Math.round(Math.random()*8)+10;
                switch(op){
                        case 11:
                            this.level_11();
                            break;
                        case 12:
                            this.level_12();
                            break;
                        case 13:
                            this.level_13();
                            break;
                        case 14:
                            this.level_14();
                            break;
                        case 15:
                            this.level_15();
                            break;
                        case 16:
                            this.level_16();
                            break;
                        case 17:
                            this.level_17();
                            break;
						case 18:
                            this.level_18();
                            break;
                }
                break;
        }
    },

    level_11:function(){//5以内加法
        var random1=Math.round(Math.random()*5);
        var random2=Math.round(Math.random()*5);
        var answer=random1+random2;
        var string=random1.toString();
        string += " + ";
        string += random2.toString();
        string += " = ";
        this.lable.string=string;
        this.answer=answer.toString();
        cc.log("The answer is "+this.answer);

    },

    level_12:function(){//5以内减法
        var random1=Math.round(Math.random()*5);
        var random2=Math.round(Math.random()*5);
        if(random1<random2){
            var random3=random1;
            random1=random2;
            random2=random3;
        }
        var answer=random1-random2;
        var string=random1.toString();
        string += " - ";
        string += random2.toString();
        string += " = ";
        this.lable.string=string;
        this.answer=answer.toString();
        cc.log("The answer is "+this.answer);

    },


    level_13:function(){//6~10加法
        var random1=Math.round(Math.random()*10);
        while(random1<6){
            random1=Math.round(Math.random()*10);
        }
        var random2=Math.round(Math.random()*10);
        while(random2<6){
            random2=Math.round(Math.random()*10);
        }
        var answer=random1+random2;
        var string=random1.toString();
        string += " + ";
        string += random2.toString();
        string += " = ";
        this.lable.string=string;
        this.answer=answer.toString();
        cc.log("The answer is "+this.answer);

    },

    level_14:function(){//6~10减法
        var random1=Math.round(Math.random()*10);
        while(random1<6){
            random1=Math.round(Math.random()*10);
        }
        var random2=Math.round(Math.random()*10);
        while(random2<6){
            random2=Math.round(Math.random()*10);
        }
        if(random1<random2){
            var random3=random1;
            random1=random2;
            random2=random3;
        }
        var answer=random1-random2;
        var string=random1.toString();
        string += " - ";
        string += random2.toString();
        string += " = ";
        this.lable.string=string;
        this.answer=answer.toString();
        cc.log("The answer is "+this.answer);

    },

    level_15:function(){//10以内的连加
        var random1=Math.round(Math.random()*10);
        var random2=Math.round(Math.random()*10);
        var random3=Math.round(Math.random()*10);
        var answer=random1+random2+random3;
        var string=random1.toString();
        string += " + ";
        string += random2.toString();
        string += " + ";
        string += random3.toString();
        string += " = ";
        this.lable.string=string;
        this.answer=answer.toString();
        cc.log("The answer is "+this.answer);

    },

    level_16:function(){//10以内的连减
        var random1=Math.round(Math.random()*10);
        var random2=Math.round(Math.random()*10);
        var random3=Math.round(Math.random()*10);
        var answer=random1-random2-random3;
        while(answer<0){
            random1=Math.round(Math.random()*10);
            random2=Math.round(Math.random()*10);
            random3=Math.round(Math.random()*10);
            answer=random1-random2-random3;
        }
        var string=random1.toString();
        string += " - ";
        string += random2.toString();
        string += " - ";
        string += random3.toString();
        string += " = ";
        this.lable.string=string;
        this.answer=answer.toString();
        cc.log("The answer is "+this.answer);

    },
    
    level_17:function(){//10以内的连加减
        var random1=Math.round(Math.random()*10);
        var random2=Math.round(Math.random()*10);
        var random3=Math.round(Math.random()*10);
        var op=Math.round(Math.random());
        switch(op){
            case 0:
                    var answer=random1+random2-random3;
                    while(answer<0){
                        random1=Math.round(Math.random()*10);
                        random2=Math.round(Math.random()*10);
                        random3=Math.round(Math.random()*10);
                        answer=random1-random2-random3;
                    }
                    var string=random1.toString();
                    string += " + ";
                    string += random2.toString();
                    string += " - ";
                    string += random3.toString();
                    string += " = ";
                    break;
            case 1:
                    var answer=random1-random2+random3;
                    while(answer<0){
                        random1=Math.round(Math.random()*10);
                        random2=Math.round(Math.random()*10);
                        random3=Math.round(Math.random()*10);
                        answer=random1-random2-random3;
                    }
                    var string=random1.toString();
                    string += " - ";
                    string += random2.toString();
                    string += " + ";
                    string += random3.toString();
                    string += " = ";
                    break;
        }
        this.lable.string=string;
        this.answer=answer.toString();
        cc.log("The answer is "+this.answer);
    },

        level_18:function(){//10~20加减
            var random1=Math.round(Math.random()*20);
            while(random1<10){
                random1=Math.round(Math.random()*20);
            }
            var random2=Math.round(Math.random()*20);
            while(random2<10){
                random2=Math.round(Math.random()*20);
            }
            var op=Math.round(Math.random());
            switch(op){
                case 0:
                        var answer=random1+random2;
                        var string=random1.toString();
                        string += " + ";
                        string += random2.toString();
                        string += " = ";
                        break;
                case 1:
                        var answer=random1-random2;
                        while(answer<0){
                            random1=Math.round(Math.random()*20);
                            while(random1<10){
                                random1=Math.round(Math.random()*20);
                            }
                            random2=Math.round(Math.random()*20);
                            answer=random1-random2;
                        }
                        var string=random1.toString();
                        string += " - ";
                        string += random2.toString();
                        string += " = ";
                        break;
            }
            this.lable.string=string;
            this.answer=answer.toString();
            cc.log("The answer is "+this.answer);
        
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

    bt_dot_Clicked:function(){
        if(this.input.length < 10 && this.input.length >0)//最多允许用户输入10位
            this.input += ".";
        this.lable_input.string = this.input;
    },

    bt_delete_Clicked:function(){
        if(this.input.length > 0){
            this.input = this.input.substring(0, this.input.length-1);
        }
        this.lable_input.string = this.input;
    },

    bt_commit_Clicked:function(){
		var expOne;
        if(this.input.length == 0){
            Alert.show("你还没有填写答案，不能提交哦", null, false);
        }
        else{
            cc.log("commit successfully");
			this.refreshSeq();
            if(this.answer == this.input){
                cc.log("Your answer is right");
				expOne = cc.instantiate(this.Right);
				expOne.x= 0;
				expOne.y= 0;
				this.mark.addChild(expOne);
				this.scheduleOnce(function() {
				// 这里的 this 指向 component
				this.mark.removeChild(expOne);
				}, 1);
                this.refreshScore();
            }else{
				expOne = cc.instantiate(this.Wrong);
				expOne.x= 0;
				expOne.y= 0;
				this.mark.addChild(expOne);
				this.scheduleOnce(function() {
				// 这里的 this 指向 component
				this.mark.removeChild(expOne);
				}, 1);
                cc.log("Your answer is wrong");
            }
            this.input = "";
            this.lable_input.string = this.input;
			if(this.seq != this.total)
				this.defaultGame();
			else
				cc.director.loadScene("lxymenu");//在这里跳到结果页面
        }
        
    },

    bt_skip_Clicked:function(){
        this.refreshSeq();
        Alert.show("别担心，稍后可以在错题中查看答案哦^_^", null, false);
        if(this.seq != this.total)
				this.defaultGame();
			else
				cc.director.loadScene("lxymenu");//在这里跳到结果页面
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
