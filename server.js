const express=require("express");
let cors = require("cors");
const app=express();
app.use(cors());
app.listen(8000,()=>{
    console.log("set")
})
const a={
    status:"false",
    key:""
};
app.get('/',function(req,res){
    givenAns=(req.query.answer).toLowerCase();
    qnum=req.query.qnum;
    theme=req.query.theme;
    if(qnum==1&&givenAns=='eeshan'&&theme==1){
        a.status="true";
        a.key="P36Ggsjlzz"
        res.send(a);
    }
    else if(qnum==2&&givenAns=='eeshan'&&theme==1){
        a.status="true";
        a.key="MpcxTfoYie"
        res.send(a);
    }
    else if(qnum==3&&givenAns=='eeshan'&&theme==1){
        a.status="true";
        a.key="Wn6HhyFlkH"
        res.send(a);
    }
    else if(qnum==4&&givenAns=='eeshan'&&theme==1){
        a.status="true";
        a.key="ATZyksW0FL"
        res.send(a);
    }
    else if(qnum==1&&givenAns=='eeshan'&&theme==2){
        a.status="true";
        a.key="5gJGg5SsYk"
        res.send(a);
    }
    else if(qnum==2&&givenAns=='eeshan'&&theme==2){
        a.status="true";
        a.key="9YsXyThs8v"
        res.send(a);
    }
    else if(qnum==3&&givenAns=='eeshan'&&theme==2){
        a.status="true";
        a.key="CMitg7poob"
        res.send(a);
    }
    else if(qnum==4&&givenAns=='eeshan'&&theme==2){
        a.status="true";
        a.key="CxDpejBCgc"
        res.send(a);
    }
    else if(qnum==1&&givenAns=='eeshan'&&theme==3){
        a.status="true";
        a.key="FDBBjjwlzQ"
        res.send(a);
    }
    else if(qnum==2&&givenAns=='eeshan'&&theme==3){
        a.status="true";
        a.key="XoPWTHCQcj"
        res.send(a);
    }
    else if(qnum==3&&givenAns=='eeshan'&&theme==3){
        a.status="true";
        a.key="zFLPGWDrTz"
        res.send(a);
    }
    else if(qnum==4&&givenAns=='eeshan'&&theme==3){
        a.status="true";
        a.key="bUQFhvlzPR"
        res.send(a);
    }
    else{
        a.status="false";
        a.key="";
        res.send(a);
    }
    
})