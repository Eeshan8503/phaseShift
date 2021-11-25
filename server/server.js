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
1.  app.get('/',function(req,res){
    givenAns=req.query.answer;
    qnum=req.query.qnum;
    theme=req.query.theme;
    if(qnum==1&&givenAns=='Infosys, Narayan Murthy'&&theme==1){
        a.status="true";
        a.key="part1OfKey"
        res.send(a);
    }
    else{
        a.status="false";
        a.key="";
        res.send(a);
    }
    
    2.if(qnum==2&&givenAns='Steve Wozniak'|| givenAns='Steve Woz'&&theme==1){
        a.status="true";
        a.key="part1OfKey"
        res.send(a);
    }
    else{
        a.status="false";
        a.key="";
        res.send(a);
    }
    
 3.     else if(qnum==3&&givenAns='Victor Hayes' || givenAns='Vic Hayes'&&theme==1){
        a.status="true";
        a.key="part1OfKey"
        res.send(a);'
        
    }
    else{
        a.status="false";
        a.key="";
        res.send(a);
    }
    
        
    
    4.else if(qnum==4&&givenAns=='Kodak'&&theme==1){
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
