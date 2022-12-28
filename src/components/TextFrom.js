import React,{useState} from "react"

export default function TextFrom(props) {
    const [text,setText] =useState("enter the text here");
   const handleUpClick = ()=>{
   // console.log("button is clicked");
    //setText("you have clicked up handleUpClick");
    let newText=text.toUpperCase();
    setText(newText);
   }
   const handle1UpClick = ()=>{
    let ntext=text.toLowerCase();
    setText(ntext);
   }
   const handleOnChange=(event)=>{
    console.log("onchange");
    setText(event.target.value);
   }
   const handle2UpClick = ()=>
   {
    let rtext="";
    setText(rtext);
   }
    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="first">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  style={{backgroundColor: props.mode ==='dark'? '#042743': 'white', color: props.mode=== 'dark'?'white': 'black'}} value={text} onChange={handleOnChange} id="floatingTextarea2"  defaultValue={""} />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handle1UpClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handle2UpClick}> Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} word and {text.length} character</p>
            <p>{0.008*text.split(" ").length} minuts read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
    )
};

