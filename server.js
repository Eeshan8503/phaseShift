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
    givenAns=req.query.answer.toLowerCase();
    qnum=req.query.qnum;
    theme=req.query.theme;
    if(qnum==1&&givenAns=='infosys, narayan murthy' || givenAns=='infosys narayan murthy' &&theme==1){
        a.status="true";
        a.key="P36Ggsjlzz"
        res.send(a);
    }
    
    
    else if(qnum==2&&givenAns=='steve wozniak'|| givenAns=='steve woz'&&theme==1){
        a.status="true";
        a.key="MpcxTfoYie"
        res.send(a);
    }
    
    
    else if(qnum==3&&givenAns=='victor hayes' || givenAns=='vic hayes'&&theme==1){
        a.status="true";
        a.key="Wn6HhyFlkH"
        res.send(a);
        
    }
    
    
        
    
    else if(qnum==4&&givenAns=='kodak'&&theme==1){
        a.status="true";
        a.key="ATZyksW0FL"
        res.send(a);
    }
    
    
     else if(qnum==5&&(givenAns=='1956, i'|| givenAns=='1956, e' || givenAns=='1956 e' || givenAns=='1956 i')&&theme==2){
        a.status="true";
        a.key="5gJGg5SsYk"
        res.send(a);
    }
    
    
    else if(qnum==6&&givenAns=='mcas' &&theme==2){
        a.status="true";
        a.key="9YsXyThs8v"
        res.send(a);
    }
    
    
    else if(qnum==7&&givenAns=='microsoft, skype' || givenAns=='microsoft skype'&&theme==2){
        a.status="true";
        a.key="CMitg7poob"
        res.send(a);
    }
    
    
    else if(qnum==8&&givenAns=='bombay stock exchange'&&theme==2){
        a.status="true";
        a.key="CxDpejBCgc"
        res.send(a);
    }
    
    
    else if(qnum==9&&givenAns=='cern, mercedes benz' || givenAns=='cern mercedes benz'&&theme==3){
        a.status="true";
        a.key="FDBBjjwlzQ"
        res.send(a);
    }
    
    
    else if(qnum==10&&givenAns=='qr code' || givenAns=='qr, code' &&theme==3){
        a.status="true";
        a.key="XoPWTHCQcj"
        res.send(a);
    }
    
    
    else if(qnum==11&&givenAns=='huawei, airtel' || givenAns=='huawei airtel'&&theme==3){
        a.status="true";
        a.key="zFLPGWDrTz"
        res.send(a);
    }
    
    
    else if(qnum==12&&givenAns=='arpa'&&theme==3){
        a.status="true";
        a.key="bUQFhvlzPR";
        res.send(a);
    }
    
    else{
        a.status="false";
        a.key="Oops! Wrong Answer";
        res.send(a);
    }
    
    
    
    
        
    
})

