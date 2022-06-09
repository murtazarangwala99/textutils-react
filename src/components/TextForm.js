import React,{useState} from 'react';

export default function TextForm(props) {

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick= () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
    }
    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("Converted to Title Case","success")
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear text","success")
    }
    const[text,setText] = useState("");

    return(
    <>
    <div className="container" style= {{ color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
            <textarea className="form-control"  id="myBox" 
            rows="8"
            value={text}
            onChange={handleOnChange}
            style= {{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode==='dark'?'white':'#042743'}}
            >
            </textarea>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={intoTitleCase}>Convert To Titlecase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style= {{ color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summery</h1>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        {/* <p>Character Count: {text.length} | Word Count: {(text.length == 0) ? (text.split(" ").length - 1) : (text.split(" ").length) }</p> */}
        <p>{text.split(" ").length === 1 && text.length === 0 ? 0 : text.split(" ").length } words and {text.length} characters</p>
        <p> {text.split(" ").length* 0.008} Minutes to read</p>
        <h3>Preview: </h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
