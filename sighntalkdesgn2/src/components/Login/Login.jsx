import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Box from "../Box";

function Login() {
  return (
    <>
     <div id ="Login" className="button">
                   
     </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div id="model-content" class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="App">
                <Box />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
