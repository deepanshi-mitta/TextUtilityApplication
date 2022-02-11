import React, {useState} from "react";

export default function TextForm(props) {
  const handleupClick = () => {
     let textnew =text.toUpperCase();
     setText(textnew );
  }
 const handleOnChange=(event)=>{
   setText(event.target.value);
 }
 const handleclick=()=>{
   let textnew=text.toLowerCase();
   setText(textnew);
 }
  const [text, setText] = useState();
  return (
    <>
  <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="12"
        ></textarea>
      </div>
    <button className="btn btn-primary" onClick={handleupClick}>
        Convert to Uppercase
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary " onClick={handleclick}>
        Convert to LowerCase
      </button>
      </div>
        <div className="cont my-3">
          <h2>Your Text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p >{0.008 *text.split(" ").length}&nbsp;&nbsp;Miniutes to read {text.split(" ").length} word</p>
          <h2 className="head mt-2">Preview</h2>
          <p>{text}</p>
        </div>
  
    </>
  );
}
