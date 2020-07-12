import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Spinner from "../Spinner/spinner";
import "./Job.css";
import Axios from "axios";
class AllJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Job: null,
      jobs: "",
      message: "",
    };
  }

  handleJob = (Job) => {
    console.log(Job);
    let data = Axios({
      method: "post",
      url: `https://whispering-lake-75400.herokuapp.com/Home/confirm/${Job._id}`,
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    data
      .then((res) => {
        alert("Job Confirm sucessfully waiting for client confirmation");
        const newArr = this.state.Job.filter(
          (p) => p._id !== res.data.details._id
        );
        this.setState({
          ...this.state,
          Job: newArr,
          jobs: `Currently ${newArr.length} jobs are available`,
        });
      })
      .catch((err) => {});
  };

  async componentDidMount() {
    try {
      const apiResponse = await Axios({
        method: "get",
        url: "https://whispering-lake-75400.herokuapp.com/Home/",
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      const Job = apiResponse;
      console.log(Job);
      this.setState({ Job: Job.data.details });
      this.setState({ jobs: Job.data.jobs });

      this.setState({ message: Job.data.message });
      // console.log(this.state.data.jobs)
      console.log(this.state);
    } catch (err) {
      console.error(err.message);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.Job !== nextState.Job;
  }

  render() {
    return this.state.Job === null ? (
      <Spinner />
    ) : (
      <>
        <div className="container mt-4">
          <div
            id="section1"
            className="div"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div>
              <h1 id="section1" style={{ color: "black"}}>
                {this.state.message}
              </h1>
              <h3 id="section1">{this.state.jobs}</h3>
            </div>
          </div>
        </div>
        <div className="divStyle">
          {this.state.Job.map((Job) => (
            <Card
              style={{ width: "18rem" }}
              key={Job.Booking_Id}
              className="cardStyle"
            >
              <span>Booking_id:</span>
              <h5>{Job._id}</h5>
              <button onClick={this.handleJob.bind(this, Job)}>Confirm</button>
            </Card>
          ))}
        </div>
      </>
    );
  }
}

export default AllJobs;
