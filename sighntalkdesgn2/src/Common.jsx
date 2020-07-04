import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Common.css";
import Category from './components/Category/Category'

import Login from "./components/Login/Login";
function Common(props) {
  return (
    <>
      <section id="banner">
        <div className="container">
          <div id="row" className="row">
            <div className="col-md-6">
              <div className="para">
                <h1>{props.heading}</h1>
                <p>Find Interpreter To Bridge Your Communication Needs</p>
              </div>
              <button
                id="btn"
                type="button"
                class="btn "
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Get Started
              </button>
              <Category />
            </div>
            <div id="loghome" className="col-md-6 text-center">
              <img src={props.image} alt="logo" />
            </div>
          </div>
        </div>
        <img
          src="https://i0.wp.com/crftshodigital.com/wp-content/uploads/revslider/info-graphic/bottom-wave.png?fit=1920%2C673&ssl=1"
          className="bottom-img"
          alt="img"
        />
      </section>
    </>
  );
}

export default Common;
