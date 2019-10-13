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
        this.choose = 29;
        this.score = 0;
        this.defaultGame();
        this.schedule(this.doCountTime,1);//计时
        this.seq = 1;
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

    bt_commit_Clicked:function(){
        this.refreshSeq();
        if(this.input.length == 0){
            Alert.show("你还没有填写答案，不能提交哦", null, false);
        }
        else{
            cc.log("commit successfully");
            if(this.answer == this.input){
                cc.log("Your answer is right");
                this.refreshScore();
            }else{
                cc.log("Your answer is wrong");
            }
            this.input = "";
            this.lable_input.string = this.input;
			this.defaultGame();
        }
        
    },

    bt_skip_Clicked:function(){
        this.refreshSeq();
        Alert.show("别担心，稍后可以在错题中查看答案哦^_^", null, false);
        this.defaultGame();
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
	
	plus:function(){ //两位数加两位数的加法（和在一百以内的）
		var randnum1 = 0;//第一个加数 
		var number1;//第一个加数 取整
		var randnum2 = 0; //第二个加数
		var number2;//第二个加数 取整
		while(randnum1 < 10)
			randnum1 = Math.random()*89;//生成10-89的随机数
		number1 =  Math.round(randnum1);
		while(randnum2 < 10)
			randnum2 = Math.random()*(89-number1);//生成10-89的随机数
		number2 =  Math.round(randnum2);
		this.lable.string = number1.toString() + "+" + number2.toString() + "=";  //题目字符串
		this.answer = number1 + number2; //答案
		cc.log("答案是" + this.answer.toString());
	},
	
	minus:function(){ //两位数减两位数的减法
		var randnum1 = 0;//第一个加数 
		var number1;//第一个加数 取整
		var randnum2 = 0; //第二个加数
		var number2;//第二个加数 取整
		while(randnum1 < 10)
			randnum1 = Math.random()*99;//生成10-99的随机数
		number1 =  Math.round(randnum1);
		while(randnum2 < 10)
			randnum2 = Math.random()*number1;//生成10-number1的随机数
		number2 =  Math.round(randnum2);
		this.lable.string = number1.toString() + "-" + number2.toString() + "=";  //题目字符串
		this.answer = number1 - number2; //答案
		cc.log("答案是" + this.answer.toString());
	},
	
	multiply:function(){ //9以内的乘法口诀
		var randnum1 = 0;//乘数
		var number1;//第一个乘数 取整
		var randnum2 = 0; //第二个乘数
		var number2;//第二个乘数 取整
		randnum1 = Math.random()*10;//生成0-10的随机数
		number1 =  Math.round(randnum1);
		randnum2 = Math.random()*10;//生成0-10的随机数
		number2 =  Math.round(randnum2);
		this.lable.string = number1.toString() + "×" + number2.toString() + "=";  //题目字符串
		this.answer = number1 * number2; //答案
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
	
	divide:function(){ //9以内的除法口诀
		var randnum1 = 0;//被除数
		var number1;//被除数 取整
		var randnum2 = 0; //除数
		var number2;//除数 取整
		while(randnum1<3)
			randnum1 = Math.random()*10;//生成1-10的随机数
		number1 =  Math.round(randnum1);
		cc.log(number1+"number1");
		var s= this.primeFactors(number1);
		cc.log(s+"s");
		while(randnum2<=0)
			randnum2 = Math.random() * (s.length-1);//生成1-s.length的随机数
		cc.log(s.length+"s.length");
		randnum2= Math.round(randnum2);
		number2 = s[randnum2];
		cc.log(number2+"number2");
		this.lable.string = number1.toString() + "÷" + number2.toString() + "=";  //题目字符串
		this.answer = number1/number2; //答案
		cc.log("答案是" + this.answer.toString());
	},
	
	mp:function(){ //乘法和加法混合
		var randnum1 = 0;
		var number1;
		var randnum2 = 0; 
		var number2;
		var randnum3 = 0; 
		var number3;
		var number4;
		randnum1 = Math.random()*10;//生成0-9的随机数
		number1 =  Math.round(randnum1);
		randnum2 = Math.random()*10;//生成0-9的随机数
		number2 =  Math.round(randnum2);
		randnum3 = Math.random()*100;//生成0-99的随机数
		number3 =  Math.round(randnum3);
		var m = Math.random();
		number4 =  Math.round(m);  //题目结构随机
		cc.log("m=",m)
		
		if(number4 == 0)
			this.lable.string = number1.toString() + "×" + number2.toString() + "+" + number3.toString() +  "=";  //题目字符串
		else
			this.lable.string = number3.toString() + "+" + number1.toString() + "×" + number2.toString() +  "=";  //题目字符串
		this.answer = number1 * number2 + number3; //答案
		cc.log("答案是" + this.answer.toString());
	},
	
	mm:function(){ //乘法和减法混合
		var randnum1 = 0;
		var number1;
		var randnum2 = 0; 
		var number2;
		var randnum3 = 0; 
		var number3;
		randnum1 = Math.random()*10;//生成0-9的随机数
		number1 =  Math.round(randnum1);
		randnum2 = Math.random()*10;//生成0-9的随机数
		number2 =  Math.round(randnum2);
		randnum3 = Math.random()*(number1*number2);//生成0-99的随机数
		number3 =  Math.round(randnum3);	
		this.lable.string = number1.toString() + "×" + number2.toString() + "-" + number3.toString() +  "=";  //题目字符串
		this.answer = number1 * number2 - number3; //答案
		cc.log("答案是" + this.answer.toString());
	},
	
	dp:function(){ //除法和加法混合
		var randnum1 = 0;//被除数
		var number1;//被除数 取整
		var randnum2 = 0; //除数
		var number2;//除数 取整
		var randnum3 = 0; 
		var number3;
		while(randnum1<3)
			randnum1 = Math.random()*100;//生成0-99的随机数
		number1 =  Math.round(randnum1);
		var s= this.primeFactors(number1);
		while(randnum2<=0)
			randnum2 = Math.random() * (s.length-1);//生成0-s.length的随机数
		randnum2=Math.round(randnum2);
		number2 = s[randnum2];
		randnum3 = Math.random()*100;//生成0-99的随机数
		number3 =  Math.round(randnum3);
		this.lable.string = number1.toString() + "÷" + number2.toString() + "+" + number3.toString() +"=";  //题目字符串
		this.answer = number1/number2 + number3; //答案
		cc.log("答案是" + this.answer.toString());

	},
	
	dm:function(){ //除法和减法混合
		var randnum1 = 0;//被除数
		var number1;//被除数 取整
		var randnum2 = 0; //除数
		var number2;//除数 取整
		var randnum3 = 0; 
		var number3;
		while(randnum1<3)
			randnum1 = Math.random()*100;//生成0-99的随机数
		number1 =  Math.round(randnum1);
		var s= this.primeFactors(number1);
		while(randnum2<=0)
			randnum2 = Math.random() * (s.length-1);//生成0-s.length的随机数
		randnum2=Math.round(randnum2);
		number2 = s[randnum2];
		randnum3 = Math.random()*(number1/number2);//生成0-99的随机数
		number3 =  Math.round(randnum3);
		this.lable.string = number1.toString() + "÷" + number2.toString() + "-" + number3.toString() + "=";  //题目字符串
		this.answer = number1/number2 - number3; //答案
		cc.log("答案是" + this.answer.toString());

	},
	
});
