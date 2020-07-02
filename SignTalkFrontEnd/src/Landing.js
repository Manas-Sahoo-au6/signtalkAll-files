import React, { Component } from "react";
import logo from "./logo.svg";
import "./Landing.css";
import logopic from './images/logo.png'
import Hero from './images/leaf.png'

class Landing extends Component {
  render() {
    return (
      <div>
        

        <section id="main">
          <div className="main-text">
            <span><strong>Sign Talk.</strong></span> <br /> Find a job<br />
            Post a Job
          </div>

          <img src={Hero} width="520" alt="leaf-main-image" />
        </section>
      </div>    
    );
  }
}

export default Landing;