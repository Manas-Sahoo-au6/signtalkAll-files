import React from "react";
import loginImg from "../../login.svg";
import Axios from "axios";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      
    };
    this.onChange = this.onChange.bind(this);
    
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,

    });
  }

   submitFunc  () {
    
    let {email,password} = this.state

    let data = Axios({
      method: "post",
      url: "https://whispering-lake-75400.herokuapp.com/Login/interpreter",
      data: {
        email: email,
        password: password,
      },
    });

    data
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        
        if (res.data.message) {
          setTimeout(() => {
            alert(res.data.message)
            console.log(res)
            console.log(localStorage.getItem('token'))
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err);
        
        alert("incorrect email or password")
      });
  };
  


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={()=>{this.submitFunc()}}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
