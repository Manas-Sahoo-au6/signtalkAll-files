import React from "react";
import "./Category.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
function CategoryPop() {
  return (
    <>
      <div className="fillUp">
        <div id="interpreter" className="interpreter">
          <div>
            <AccountCircleIcon />
          </div>
          <div>
           
            <button
              style={{ backgroundColor:"transparent",border:"none",color: "#4301a6",height:"50px", width: "100px", marginLeft: "100px",marginTop:"6rem" }}
            >
             <div style={{marginLeft: "-6.5rem",height:"50px",marginTop:"-3.5rem"}}> <WorkIcon /></div>
            </button>
          </div>
        </div>
        <div id="user" className="user">
          <AccountCircleIcon />
        </div>
      </div>
    </>
  );
}

export default CategoryPop;
