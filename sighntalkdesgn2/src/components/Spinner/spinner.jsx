import React from "react";

import "./Spinner.css";

function Spinner() {
  return (
    <div>
      
    <div className="div1" id="one"></div>
    <div className="div1" id="two"></div>
    <div className="div2" id="three"></div>
    <div className="div2" id="four"></div>
  
      <div className="lableText" style={{marginLeft:"40%",marginTop:"10rem",color:"red"}}> <h2>Profile Loading...</h2></div>
    </div>
  );
}

export default Spinner;
