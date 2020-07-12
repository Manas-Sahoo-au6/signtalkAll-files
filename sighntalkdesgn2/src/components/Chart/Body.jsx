import React, { Component } from "react";
import Hr from "./Hr";
import Div from "./Div";
import Heading from "./Heading";
import Section1 from "./Section1";
import ChartRound from "./ChartRound";
import ChartHorizontal from "./ChartHorizontal";
import Section2 from "./Section2";
import Axios from "axios";
import Spinner from "../Spinner/spinner";
import NavBar from "../NavBar";
import "./profile.css";
import {Link} from 'react-router-dom'

export default class Body extends Component {
  state = {
    data: {},
  };
     
   logout = ()=>{
    localStorage.removeItem('token')
   alert('Logged out sucessfully')
  }

  render() {
    return (
      <>
        (
        <Div  className="container mt-4" >
          <div
         
            id="section1"
            className="div"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            
            <div  >
              <Heading heading=" Interpreter's profile " />
            </div>
            <div style={{marginTop:"1rem"}}>
             <button style={{backgroundColor:"purple",color:"white",width:"100px",fontSize:"large"}} onClick={this.logout}  > Logout</button> 
             <Link to="/AllJobs">   <button style={{marginLeft:"3rem",backgroundColor:"purple",color:"white",width:"150px",fontSize:"large"}}>All Jobs Here</button></Link>
              
       
           
           
            </div>
          </div>
          <Hr />
          <div id="section1">
            <Section1 data={this.state.data} />
          </div>
          <Hr />

          <div id="section1" style={{ marginBottom: "3rem" }}>
      
            <Div className="col d-flex">
              <ChartRound />
              <ChartHorizontal />
            </Div>
          </div>
        </Div>
        )
      </>
    );
  }

  async componentDidMount() {
    let data = Axios({
      method: "get",
      url: "https://whispering-lake-75400.herokuapp.com/Home/profile",
      headers: {
        token: localStorage.getItem("token"),
      },
    });

    await data
      .then((res) => {
        if (res) {
          setTimeout(() => {
            // alert(mssg);
            this.setState({ data: res.data });
            console.log(res.data);

            console.log(localStorage.getItem("token"));
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err);

        // alert(mssg);

        console.log(err);
      });
  }
}
