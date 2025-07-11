import React, { useState } from "react";
import "./style.css";

const TextArea = (props) => {
  const [textState, setTextState] = useState("");
  const clr = {
    green: "success",
    light: "light",
    grey: "secondary",
    black:"dark"
  };
  const vl =props.mode==="dark"?props.bgColor:"light" ;
  const handleChange = (e) => {
    setTextState(e.target.value);
  };
  const Submit = (e) => {
    let val = textState.toUpperCase();
    setTextState(val);
    props.showAlert("success", "Text converted to Upper case");
  };

  return (
    <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
      <h1>{props.textTitle}</h1>

      {/* {
        copy ? <div className="copy container ">copyied </div> : <div></div>
        } */}

      <div className="mb-3 ">
        <textarea
          className={`form-control text-${props.mode==="light"?"dark":"light"} bg-${clr[vl]}`}
          
          id="texraraea"
          rows="8"
          value={textState}
          type="text"
          onChange={handleChange}
        >
          {" "}
        </textarea>
      </div>
       <button className="btn btn-primary mx-2 my-2" onClick={()=>{
        if(textState.replace(/\s+/g, " ").trim().length>0){Submit()}else{
          props.showAlert("warning", "Enter Text");
        }
       }
          }>
        Click to UperCase
      </button>
        <button
        className="btn btn-primary mx-2 my-2"
        onClick={() => {
          if(textState.replace(/\s+/g, " ").trim().length>0){
            setTextState(textState.toLowerCase());
          props.showAlert("success", "Text converted to lower case");
          }else{
            props.showAlert("warning", "Enter Text");
          }
         
        }}
      >
        Click to LowerCase
      </button>

        <button
        className=" btn btn-primary  mx-2 my-2"
        onClick={() => {
          if(textState.replace(/\s+/g, " ").trim().length>0){
          setTextState("");
          props.showAlert("success", "Text is Cleard");
          }else{
            props.showAlert("warning", "Enter Text");
          }
        }}
      >
        Clear
      </button>

      {  <button
        className="btn btn-primary mx-2 my-2"
        onClick={() => {
          if(textState.replace(/\s+/g, " ").trim().length>0){
          setTextState(textState.replace(/\s+/g, " ").trim());
          props.showAlert("success", "Extra spaces are cleared");
          }else{
            props.showAlert("warning", "Enter Text");
          }
        }}
      >
        Clear extra space
      </button>}

      {  <button
        className="btn btn-primary my-2"
        onClick={() => {
          if(textState.replace(/\s+/g, " ").trim().length>0){
           var copyText =textState;

                navigator.clipboard.writeText(copyText);
          //       setCopy(true)
          //       setTimeout(()=>{
          //         setCopy(false)
          //       },1000)
          props.showAlert("success", "Text copied");}
          else{
            props.showAlert("warning", "Enter Text");
          }
        }}
      >
        Copy
      </button>}

      <button
        className="btn btn-primary mx-2 my-2"
        onClick={() => {
          if(textState.replace(/\s+/g, " ").trim().length > 0) {
            const wordCount = textState.split(/\s+/).filter((e) => e.length !== 0).length;
            props.showAlert("success", `Number of words: ${wordCount}`);
          } else {
            props.showAlert("warning", "Enter Text");
          }
        }}
      >
        No of Words
      </button>

      <h2>Your text Summary</h2>
      <p className="container">
        {textState.replace(/\s+/g, " ").trim().length} no. of characters and {textState.split(/\s+/).filter((e)=>{
                           return e.length!==0
        }).length}
        no. of words
      </p>
      <p className="container">
        {0.005 * textState.replace(/\s+/g, " ").trim().split(/\s+/).filter((e)=>{
                           return e.length!==0
        }).length} time require to read
      </p>
      <h3>preview</h3>
      <p>{textState.length > 0 ? textState : "Enter some thing to proview"}</p>
    </div>
  );
};

export default TextArea;