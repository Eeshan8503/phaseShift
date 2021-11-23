import React, { useState } from "react";
import './Qna.css'
import api from './../api'
const QnA=(props)=>{
  const [check, setcheck] = useState(false);
  const [key, setkey] = useState("");
      async function abcd(event){
        event.preventDefault();
        let ans=document.querySelectorAll('.feild')[props.num-1].value;
        let checkk=await api.get(`/?theme=${props.theme}&qnum=${props.num}&answer=${ans}`);
        console.log(checkk.data.status);
        setcheck(checkk.data.status);
        setkey(checkk.data.key);
    }
    return(
    <>
    <div className="question">
            <h1>Question {props.num}</h1>
            <hr/>
            <p>{props.question}</p>
            <form>
            <input className="feild" type="text" required /><br/>
            <input type="submit" className="btn" onClick={abcd} value="Submit" style={check==="true"?{display:"none"}:{display:"inline-block"}}/>
            <h1>{key}</h1>
            </form>
    </div>
        
    </>
    )
}
export default QnA;