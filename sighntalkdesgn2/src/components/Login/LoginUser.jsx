import React, { Component } from "react";
import "./Login.css";
import Axios from "axios";
import {NavLink}  from 'react-router-dom'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formSubmit: "",
      formErrors: {
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      let data = Axios({
        method: "post",
        url: "https://whispering-lake-75400.herokuapp.com/login/user",
        data: {
          email: this.state.email,
          password: this.state.password,
        },
      });

      data
        .then((res) => {
          if (res) {
            setTimeout(() => {
              // alert(mssg);
              alert(`Registered   sucessfully: ${res.data.message}`);
              console.log(res.data.message);
              localStorage.setItem('token',res.data.token)
              console.log(localStorage.getItem('token'))
            }, 500);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Already Registered");
          // alert(mssg);

          console.log(err);
        });
    } else {
      alert(`FORM INVALID -\n ${this.state.formErrors.email} `);
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="some">
        <div className="form-wrapper">
          <h1>Login as User</h1>
          <form  noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button onClick={this.handleSubmit} type="submit">Login</button>
              <button style={{backgroundColor:"white"}}>
          <NavLink to="/regUser" style={{textDecoration:"none"}}> Not Have an Account?</NavLink>     
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginUser;
