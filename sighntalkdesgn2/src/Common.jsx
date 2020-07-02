import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Common.css";
import image1 from "./images/undraw_hire_te5y.svg";
import Login from "./components/Login/Login";
function Common(props) {
  return (
    <>
      <section id="banner">
        <div className="container">
          <div id="row" className="row">
            <div className="col-md-6">
              <div className="para">
                <h1>CONNECT ANYTIME & ANYWHERE</h1>
                <p>Find Interpreter To Bridge Your Communication Needs</p>
              </div>
              <button
                id="btn"
                type="button"
                class="btn "
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Get Started
              </button>
              <Login />
            </div>
            <div id="loghome" className="col-md-6 text-center">
              <img src={props.image} alt="logo" />
            </div>
          </div>
        </div>
        <img src="https://sociallyhandled.com/wp-content/uploads/2018/10/waves-shape.png" className="bottom-img" alt="img"/>
      </section>
    </>
  );
}

export default Common;
