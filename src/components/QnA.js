import React, { useState } from "react";
import './Qna.css'
import api from './../api'
const QnA=(props)=>{
  console.log(props.image);
  const [check, setcheck] = useState(null);
  const [key, setkey] = useState("");
      async function abcd(event){
        event.preventDefault();
        let ans=document.querySelectorAll('.feild')[0].value;
        let checkk=await api.get(`/modal?theme=${props.theme}&qnum=${props.num}&answer=${ans}`);
        console.log(checkk.data.status);
        setcheck(checkk.data.status);
        setkey(checkk.data.key);
    }
    return(
    <>
    <center>
    <div className="question">
            <h1>Question {props.num}</h1>
            <hr/>
            <p style={props.num===3||props.num===7 || props.num===10 || props.num===11 ||props.num===5?{display:"none"}:{display:"inline"}}>{props.question}</p>
            <pre style={props.num===3 || props.num===7 || props.num===10 || props.num===11||props.num===5?{display:"inline"}:{display:"none"}} >{props.question}</pre>
            <form>
            <img src={props.image} style={props.image?{height:"75%", width:"90%"}:{display:"none"}} alt="fd"/>
            <br/>
            <input className="feild" type="text" required placeholder="Enter your answer" /><br/>
            <input type="submit" className="btn" onClick={abcd} value="Submit" style={check==="true"?{display:"none"}:{display:"inline-block"}}/>
            <h1>{key}</h1>
            <h3 style={check==="true"?{display:"inline", color:"#d4d6d5"}:{display:"none"}}>Copy paste the key to hackerrank</h3>

            </form>
    </div>
    </center>
    </>
    )
}
export default QnA;