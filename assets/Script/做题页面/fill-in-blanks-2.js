/***********************************************************************************************************************************
功能：二年级的题目练习
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
 
        },
		
		right_audio: {
			default: null,
			type: cc.AudioClip
		},
		
		wrong_audio: {
			default: null,
			type: cc.AudioClip
		}
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.input;							//用户使用键盘输入的字符串
        this.answer;						//题目的标准答案
        this.choose;						//记录用户选择的题目类型
        this.timecnt = 0;					//记录时间
        this.score;							//记录做对的题目数量
        this.seq;							//记录题号
		this.count = 0;
		this.allexercise = [];				//记录所有的题目
		this.allinput = [];					//记录用户所有的答案
		this.allanswer = [];				//记录所有的答案
		this.rw = [];						//记录用户的做题情况
		this.errorbook = [];				//错题本
        this.erbkanswer = [];				//错题答案
        this.wronganswer = [];				//错误答案
        this.errorbook  = JSON.parse(cc.sys.localStorage.getItem('errorbook2'));		//记录用户老错题
        this.erbkanswer  = JSON.parse(cc.sys.localStorage.getItem('erbkanswer2'));		//记录用户老错题
        this.wronganswer = JSON.parse(cc.sys.localStorage.getItem('wronganswer2'));		//记录用户老错误答案
        cc.log(this.errorbook+"dhjshjsh");
        if(this.errorbook == null){
            this.errorbook = [];
            cc.sys.localStorage.setItem('errorbook2', JSON.stringify(this.errorbook));	//初始化本地错题文件           
        }
        if(this.erbkanswer == null){
            this.erbkanswer = [];
            cc.sys.localStorage.setItem('erbkanswer2', JSON.stringify(this.erbkanswer));//初始化本地错题文件           
        }
        if(this.wronganswer == null){
            this.wronganswer = [];
            cc.sys.localStorage.setItem('wronganswer2', JSON.stringify(this.wronganswer));//初始化本地错答案文件           
        }
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
        //每一类题型的代码逻辑，11代表一年级第一种题型，12代表一年级第二种题型，22代表二年级第二种题型，以此类推。
        switch(this.choose){
            case 21:
                this.plus();
                break;
            case 22:
                this.minus();
                break;
			case 23:
                this.multiply();
                break;
			case 24:
				this.divide();
				break;
			case 25:
				this.mp();
                break;
			case 26:
				this.mm();
                break;
			case 27:
				this.dp();
                break;
			case 28:
				this.dm();
                break;
			case 29:
				var r = Math.random()*7;
				var rr = Math.round(r);
				switch(rr){
					case 0:
						this.plus();
						break;
					case 1:
						this.minus();
						break;
					case 2:
						this.multiply();
						break;
					case 3:
						this.divide();
						break;
					case 4:
						this.mp();
						break;
					case 5:
						this.mm();
						break;
					case 6:
						this.dp();
						break;
					case 7:
						this.dm();
						break;
					}
				break;
		}
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

		
	plus:function(){ 								//两位数加两位数的加法（和在一百以内的）
		var randnum1 = 0;							//第一个加数 
		var number1;								//第一个加数 取整
		var randnum2 = 0;							//第二个加数
		var number2;								//第二个加数 取整
		while(randnum1 < 10)
			randnum1 = Math.random()*89;			//生成10-89的随机数
		number1 =  Math.round(randnum1);
		while(randnum2 < 10)
			randnum2 = Math.random()*(99-number1);	//生成10-89的随机数
		number2 =  Math.round(randnum2);
		this.lable.string = number1.toString() + "+" + number2.toString() + "=";  //题目字符串
		this.answer = number1 + number2; 			//答案
		cc.log("答案是" + this.answer.toString());
	},
	
	minus:function(){ 								//两位数减两位数的减法
		var randnum1 = 0;							//第一个加数 
		var number1;								//第一个加数 取整
		var randnum2 = 0; 							//第二个加数
		var number2;								//第二个加数 取整
		while(randnum1 < 10)
			randnum1 = Math.random()*99;			//生成10-99的随机数
		number1 =  Math.round(randnum1);
		while(randnum2 < 10)
			randnum2 = Math.random()*number1;		//生成10-number1的随机数
		number2 =  Math.round(randnum2);
		this.lable.string = number1.toString() + "-" + number2.toString() + "=";  //题目字符串
		this.answer = number1 - number2; 			//答案
		cc.log("答案是" + this.answer.toString());
	},
	
	multiply:function(){ 							//9以内的乘法口诀
		var randnum1 = 0;							//乘数
		var number1;								//第一个乘数 取整
		var randnum2 = 0; 							//第二个乘数
		var number2;								//第二个乘数 取整
		randnum1 = Math.random()*10;				//生成0-10的随机数
		number1 =  Math.round(randnum1);
		randnum2 = Math.random()*10;				//生成0-10的随机数
		number2 =  Math.round(randnum2);
		this.lable.string = number1.toString() + "×" + number2.toString() + "=";  //题目字符串
		this.answer = number1 * number2; 			//答案
		cc.log("答案是" + this.answer.toString());
	},
	
	primeFactors:function(n){
    var c = 0;
	var factors=[];
    while(c<=n){
        if(n % c == 0){
            factors.push(c);
			c++
        }
        else{
            c++;
        }
    }
	cc.log(factors);
    return factors;
	},
	
	divide:function(){ 								//9以内的除法口诀
		var randnum1 = 0;							//被除数
		var number1;								//被除数 取整
		var randnum2 = -1; 							//除数
		var number2;								//除数 取整
		while(randnum1<3)
			randnum1 = Math.random()*10;			//生成1-10的随机数
		number1 =  Math.round(randnum1);
		cc.log(number1+"number1");
		var s= this.primeFactors(number1);
		cc.log(s+"s");
		while(randnum2<0)
			randnum2 = Math.random() * (s.length-1);//生成1-s.length的随机数
		cc.log(s.length+"s.length");
		randnum2= Math.round(randnum2);
		number2 = s[randnum2];
		cc.log(number2+"number2");
		this.lable.string = number1.toString() + "÷" + number2.toString() + "=";  //题目字符串
		this.answer = number1/number2; 				//答案
		cc.log("答案是" + this.answer.toString());
	},
	
	mp:function(){ 									//乘法和加法混合
		var randnum1 = 0;
		var number1;
		var randnum2 = 0; 
		var number2;
		var randnum3 = 0; 
		var number3;
		var number4;
		randnum1 = Math.random()*10;				//生成0-9的随机数
		number1 =  Math.round(randnum1);
		randnum2 = Math.random()*10;				//生成0-9的随机数
		number2 =  Math.round(randnum2);
		randnum3 = Math.random()*100;				//生成0-99的随机数
		number3 =  Math.round(randnum3);
		var m = Math.random();
		number4 =  Math.round(m); 					//题目结构随机
		cc.log("m=",m)
		
		if(number4 == 0)
			this.lable.string = number1.toString() + "×" + number2.toString() + "+" + number3.toString() +  "=";  //题目字符串
		else
			this.lable.string = number3.toString() + "+" + number1.toString() + "×" + number2.toString() +  "=";  //题目字符串
		this.answer = number1 * number2 + number3;	//答案
		cc.log("答案是" + this.answer.toString());
	},
	
	mm:function(){ 									//乘法和减法混合
		var randnum1 = 0;
		var number1;
		var randnum2 = 0; 
		var number2;
		var randnum3 = 0; 
		var number3;
		randnum1 = Math.random()*10;				//生成0-9的随机数
		number1 =  Math.round(randnum1);
		randnum2 = Math.random()*10;				//生成0-9的随机数
		number2 =  Math.round(randnum2);
		randnum3 = Math.random()*(number1*number2);	//生成0-99的随机数
		number3 =  Math.round(randnum3);	
		this.lable.string = number1.toString() + "×" + number2.toString() + "-" + number3.toString() +  "=";  //题目字符串
		this.answer = number1 * number2 - number3;	//答案
		cc.log("答案是" + this.answer.toString());
	},
	
	dp:function(){ 									//除法和加法混合
		var randnum1 = 0;							//被除数
		var number1;								//被除数 取整
		var randnum2 = 0; 							//除数
		var number2;								//除数 取整
		var randnum3 = 0; 
		var number3;
		while(randnum1<3)
			randnum1 = Math.random()*100;			//生成0-99的随机数
		number1 =  Math.round(randnum1);
		var s= this.primeFactors(number1);
		while(randnum2<=0)
			randnum2 = Math.random() * (s.length-1);//生成0-s.length的随机数
		randnum2=Math.round(randnum2);
		number2 = s[randnum2];
		randnum3 = Math.random()*100;				//生成0-99的随机数
		number3 =  Math.round(randnum3);
		this.lable.string = number1.toString() + "÷" + number2.toString() + "+" + number3.toString() +"=";  //题目字符串
		this.answer = number1/number2 + number3; 	//答案
		cc.log("答案是" + this.answer.toString());

	},
	
	dm:function(){ 									//除法和减法混合
		var randnum1 = 0;							//被除数
		var number1;								//被除数 取整
		var randnum2 = 0; 							//除数
		var number2;								//除数 取整
		var randnum3 = 0; 
		var number3;
		while(randnum1<3)
			randnum1 = Math.random()*100;			//生成0-99的随机数
		number1 =  Math.round(randnum1);
		var s= this.primeFactors(number1);
		while(randnum2<=0)
			randnum2 = Math.random() * (s.length-1);//生成0-s.length的随机数
		randnum2=Math.round(randnum2);
		number2 = s[randnum2];
		randnum3 = Math.random()*(number1/number2);	//生成0-99的随机数
		number3 =  Math.round(randnum3);
		this.lable.string = number1.toString() + "÷" + number2.toString() + "-" + number3.toString() + "=";  //题目字符串
		this.answer = number1/number2 - number3; 	//答案
		cc.log("答案是" + this.answer.toString());

	},
	

    bt_commit_Clicked:function(){					//用户提交答案
		var expOne;
        if(this.input.length == 0){					//提示用户未提交
            Alert.show("你还没有填写答案，不能提交哦", null, false);
        }
        else{
            cc.log("commit successfully");
			cc.log("题目 "+this.lable);
			this.allexercise.push(this.lable.string);	//存储题目
			this.allinput.push(this.input);				//存储用户输入
			this.allanswer.push(this.answer);			//存储题目答案
			this.refreshSeq();							//刷新题号
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
				}, 0.5);
				this.rw.push(1);
                this.refreshScore();
            }else{
				this.errorbook.push(this.lable.string);
                this.erbkanswer.push(this.answer);
                this.wronganswer.push(this.input);
				this.current=cc.audioEngine.play(this.wrong_audio, false, 0.6);
				expOne = cc.instantiate(this.Wrong);	//生成的提示错误预制体
				expOne.x= 0;
				expOne.y= 0;
				this.rw.push(0);
				this.mark.addChild(expOne);
				this.scheduleOnce(function() {
				// 这里的 this 指向 component
				this.mark.removeChild(expOne);
				}, 0.5);
                cc.log("Your answer is wrong");
            }
            this.input = "";
            this.lable_input.string = this.input;
			cc.log("this.seq"+this.seq);
			if(this.seq != this.total + 1)
				this.scheduleOnce(function() {			//延迟0.5秒（提供0.5秒时间给用户显示自己是否正确）
				// 这里的 this 指向 component
				this.defaultGame();
				}, 0.5);
			else{
				cc.sys.localStorage.setItem('errorbook2', JSON.stringify(this.errorbook));				//存储所有错题
                cc.sys.localStorage.setItem('erbkanswer2', JSON.stringify(this.erbkanswer));			//存储错题答案
                cc.sys.localStorage.setItem('wronganswer2', JSON.stringify(this.wronganswer));          //存储错误答案
				cc.sys.localStorage.setItem('allexercise', JSON.stringify(this.allexercise));			//存储所有题目
				cc.sys.localStorage.setItem('allinput', JSON.stringify(this.allinput));					//存储用户所有输入
				cc.sys.localStorage.setItem('rw', JSON.stringify(this.rw));								//存储用户做题情况
				cc.sys.localStorage.setItem('allanswer', JSON.stringify(this.allanswer));				//存储用户做题情况
				cc.director.loadScene("result_detail");}//在这里跳到结果页面
        }
        
    },

    bt_skip_Clicked:function(){
		this.allexercise.push(this.lable.string);
		this.allinput.push(0);
		this.rw.push(0);
		this.allanswer.push(this.answer);
        this.refreshSeq();
		this.current=cc.audioEngine.play(this.wrong_audio, false,0.6);
        Alert.show("别担心，稍后可以在错题中查看答案哦^_^", null, false);
        if(this.seq != this.total + 1)
				this.defaultGame();
			else{
				cc.sys.localStorage.setItem('errorbook2', JSON.stringify(this.errorbook));				//存储所有错题
                cc.sys.localStorage.setItem('erbkanswer2', JSON.stringify(this.erbkanswer));			//存储错题答案
                cc.sys.localStorage.setItem('wronganswer2', JSON.stringify(this.wronganswer));          //存储错误答案
				cc.sys.localStorage.setItem('allexercise', JSON.stringify(this.allexercise));			//存储所有题目
				cc.sys.localStorage.setItem('allinput', JSON.stringify(this.allinput));					//存储用户所有输入
				cc.sys.localStorage.setItem('allanswer', JSON.stringify(this.allanswer));				//存储用户做题情况
				cc.sys.localStorage.setItem('rw', JSON.stringify(this.rw));								//存储用户做题情况
				cc.director.loadScene("result_detail");//在这里跳到结果页面
			}
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
        if(this.seq != this.total +1)
			this.lbSeq.string = this.seq.toString();
        this.lbScore.node.stopAllActions();
        this.lbScore.node.runAction(cc.sequence(cc.scaleTo(0.1,1.3,1.3),cc.scaleTo(0.1,1,1)));
    },
	
	bt_end_Clicked:function(){		//结束练习
		cc.sys.localStorage.setItem('errorbook1', JSON.stringify(this.errorbook));			//存储所有错题
        cc.sys.localStorage.setItem('erbkanswer1', JSON.stringify(this.erbkanswer));			//存储错题答案
        cc.sys.localStorage.setItem('wronganswer1', JSON.stringify(this.wronganswer));          //存储错误答案
		cc.sys.localStorage.setItem('allexercise', JSON.stringify(this.allexercise));			//存储所有题目
		cc.sys.localStorage.setItem('allinput', JSON.stringify(this.allinput));			//存储用户所有输入
		cc.sys.localStorage.setItem('rw', JSON.stringify(this.rw));			//存储用户做题情况
		cc.sys.localStorage.setItem('allanswer', JSON.stringify(this.allanswer));			//存储用户做题情况
        cc.director.loadScene("lxymenu");
    },
});
