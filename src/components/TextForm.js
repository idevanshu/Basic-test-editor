import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase.","success");
    }

    const handleRemove = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }
   
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase.","success");
    }

    const handleClear = () =>{
        let newText = "";
        setText(newText);
    }

    const handleCopy = () =>{
       navigator.clipboard.writeText(text);
       props.showAlert("Copied to Clipboard.","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':"black"}}>
                <h1> {props.heading}  </h1>   
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':"black"}} onChange={handleOnChange} id="myBox" rows="13"></textarea>
                </div>
                <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0}  className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0}  className="btn btn-warning mx-1 my-1" onClick={handleRemove}>Remove extra Space</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClear}>ClearText</button>
                <button disabled={text.length===0}  className="btn btn-info mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
            </div>
            <div className="container my-2" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':"black"}}>
                <h2>Your text summary</h2>
                <p> {text.length>0?text.split(/\s+/).filter((element)=>{return element.length!==0}).length:0} words and {text.length} characters</p>
                <p>{text.length>0?0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length:0} Minutes to read. </p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter the text above to preview"}</p>
            </div>
        </>
    )
}