import React, { useState } from "react";

export default function Textform(props) {
  const UppertoCase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const LowertoCase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };

  const ClearTextArea = () => {
    let ExistText = "";
    setText(ExistText);
  };
  const writeText = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("Enter your text");

  return (
    <div>
      <h1 className="my-4">{props.title}</h1>
      <div className="mb-3">
        <textarea
          className="form-control border border-3 "
          id="textbox"
          value={Text}
          onChange={writeText}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={UppertoCase}>
          Convert to Uppper_Case
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={LowertoCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={ClearTextArea}>
          Clear TextArea
        </button>
        <h2>Summary of my Textarea Tag :</h2>
        <p>
          {Text.split(" ").length} words {Text.length} Character
        </p>
        <span>Words Count Time :</span>
        <p>{0.008 * Text.split(" ").length}</p>
        <div className="container border border-2 ">
          <h3>Display Textarea(preview) : </h3>
          <span>{Text}</span>
        </div>
      </div>
    </div>
  );
}
