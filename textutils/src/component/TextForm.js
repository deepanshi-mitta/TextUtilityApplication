import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const [mystyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [mytext, setmytext] = useState("Enable Dark Mode");
  const handleupClick = () => {
    let textnew = text.toUpperCase();
    setText(textnew);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearclick = () => {
    let newText = "";
    setText(newText);
  };
  const handleclick = () => {
    let textnew = text.toLowerCase();
    setText(textnew);
  };
  const Enable = () => {
    if (mystyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });

      setmytext("Enable Light Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });

      setmytext("Enable Dark Mode");
    }
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-5" style={mystyle}>
          <textarea
            style={mystyle}
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary mx-4" onClick={handleupClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary " onClick={handleclick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-4" onClick={handleClearclick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-1" onClick={Enable}>
            {mytext}
          </button>
        </div>
      
      <div>
        <h2 className="mt-5">Your Text summary</h2>
        <p>{text.split(" ").length} words and { text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Miniutes to read {text.split(" ").length} word</p>
        <h2 className="head mt-2">Preview</h2>
        <p>{text}</p>
      </div>
      </div>
    </>
  );
};

export default TextForm;
