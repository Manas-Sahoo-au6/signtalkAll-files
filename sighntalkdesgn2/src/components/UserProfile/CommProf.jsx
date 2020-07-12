import React, { Component } from "react";
import UserProfile from "./userProfile";
import Body from "../Chart/Body";
import Axios from "axios";
import Spinner from "../Spinner/spinner";

class CommProf extends Component {
  state = {
    data: {},
    dataUser: {},
  };
  async componentDidMount() {
    let data = Axios({
      method: "get",
      url: "https://whispering-lake-75400.herokuapp.com/Services/profile",
      headers: {
        token: localStorage.getItem("token"),
      },
    });

    await data
      .then((res) => {
        if (res) {
          setTimeout(() => {
            // alert(mssg);

            this.setState({ dataUser: res.data });
         console.log((this.state.dataUser))
          }, 200);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    let dataUser = Axios({
      method: "get",
      url: "https://whispering-lake-75400.herokuapp.com/Home/profile",
      headers: {
        token: localStorage.getItem("token"),
      },
    });

    await dataUser
      .then((res) => {
        if (res) {
          setTimeout(() => {
            // alert(mssg);

            this.setState({ data: res.data });
            console.log("datInt",this.state.data)
          
          }, 200);
        }
      })
      .catch((err) => {
        console.log(err);

        // alert(mssg);
      });
  }
  render() {
    console.log(this.state.dataUser.user)
    return (
      <>
      {this.state.dataUser.user !== undefined  ? <UserProfile userData={this.state.dataUser} /> : null}
      {this.state.data.email !==  undefined ? <Body/> : null}
      {(this.state.data.email ===  undefined)&& (this.state.dataUser.user === undefined )? <Spinner/> : null}
      </>
    );
  }
}

export default CommProf;
