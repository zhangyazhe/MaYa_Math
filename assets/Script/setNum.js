cc.Class({
    extends: cc.Component,
    properties: {        
    },
    onLoad(){
        
    },
    start () {
        
    },

    setNum10: function(){  
        cc.director.loadScene("fill-in-blanks-3")
     },

    setNum30: function(){
        cc.director.loadScene("fill-in-blanks-3")
    },

    setNum50: function(){
        cc.director.loadScene("fill-in-blanks-3")
     },

    back: function(){
        cc.director.loadScene("lxymenu")
     },

    
});
