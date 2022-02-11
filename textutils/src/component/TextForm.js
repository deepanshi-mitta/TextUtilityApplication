import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleupClick = () => {
    let textnew = text.toUpperCase();
    setText(textnew);
    props.showAlert("Converted to UpperCase!!","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is removed!!","success");
  };
  const copy=()=>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied!!","success");
  };
  const space=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed!!","success");
  }
  const handleclick = () => {
    let textnew = text.toLowerCase();
    setText(textnew);
    props.showAlert("Converted to LowerCase!!","success");
  };

  return (
    <>
      <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-5">
          <textarea
            className="form-control"
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary mx-1" onClick={handleupClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleclick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearclick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-1" onClick={copy}>
            Copy to Clipboard
          </button>
          <button className="btn btn-primary mx-1" onClick={space}>
            Remove Extra Spaces
          </button>
        </div>
      
      <div>
        <h2 className="mt-5">Your Text summary</h2>
        <p>{text.split(" ").length} words and { text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Miniutes to read {text.split(" ").length} word</p>
        <h2 className="head mt-2">Preview</h2>
        <p>{text.length>0?text:"Enter in the textbox to preview it here"}</p>
      </div>
      </div>
    </>
  );
};

export default TextForm;
