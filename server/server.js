const express=require("express");
const dontenv=require('dotenv');
let cors = require("cors");
const app=express();
const PORT=process.env.port || 8000
app.use(cors());

if(process.env.NODE_ENV=="production"){
    app.use(express.static('phaseshift/build'));
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(PORT,()=>{
    console.log("set")
})
const a={
    status:"false",
    key:""
};
app.get('/',function(req,res){
    givenAns=req.query.answer;
    qnum=req.query.qnum;
    theme=req.query.theme;
    if(qnum==1&&givenAns=='eeshan'&&theme==1){
        a.status="true";
        a.key="part1OfKey"
        res.send(a);
    }
    else{
        a.status="false";
        a.key="";
        res.send(a);
    }
    
})