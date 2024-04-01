import React, { useState } from "react";

export default function RevisionTextform(props) {
    const UpperToCase = () => {
        let NewText = Text.toUpperCase();
        setText(NewText);
    }
    const writeChange = (event) =>{

        setText(event.target.value)
    };
  const [Text, setText] = useState("Enter your text...");
  return (
    <div>
         <h1 className="my-4">{props.title}</h1>
      <div className="mb-3">
        <textarea
          className="form-control border border-3 "
          id="textbox"
          value={Text}
          onChange={writeChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={UpperToCase}>Convert to Uppper_Case</button>
        <button className="btn btn-primary my-3 mx-3">
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-3 mx-3">Clear TextArea</button>
      </div>
    </div>
  );
}
