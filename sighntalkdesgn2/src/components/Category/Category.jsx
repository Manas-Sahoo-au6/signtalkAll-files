import React from "react";
import "../Box.css";
import CategoryPop from "./CategoryPop";
function Category() {
  return (
    <>
      <div
        className="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div id="modal-content" className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="App">
            
            <CategoryPop /> 
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
