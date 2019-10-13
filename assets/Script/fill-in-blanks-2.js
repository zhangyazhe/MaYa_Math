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
        this.choose = 21;
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
                this.level_21();
                break;
            
        }
    },

    level_21:function(){
        
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
        }
        this.defaultGame();
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
});
