import React from "react";
import "./Userprofile.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function UserProfile(props) {
  let { email, firstName, lastName } = props.userData.user;
  console.log(props.userData.user);
  return (
    <>
      {/* <!-- https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg --> */}
      <div id="userProfile" className="container" style={{ height: "100vh" }}>
        <div className="row">
          {/* <!-- first column --> */}
          <div className="col-3 shadow rounded" id="shadowSide">
            <div className="col-12 p-2">
              <img
                className="col-12 m-auto rounded-circle"
                src="https://media-exp1.licdn.com/dms/image/C5603AQF8arJJgHpPjQ/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=dczxN_2g3BCMc505Y0YSLfy-WcuagyoFKYgyQZ8sUSQ"
              />
            </div>
            <div className="col-12 p-3">
              <h3 className="text-left light-font" style={{fontWeight:"600"}}>{firstName}</h3>
              <p className="light-font">Contact  {email}</p>
            </div>
          </div>
          {/* <!-- middle column --> */}
          <div className="col-6 middle">
            {/* <!-- small box inside middle column --> */}
            <div className="col-12 p-3 shadow mb-2 rounded">
              <h4 className="text-left light-font">Some title</h4>
              <div className="col-10 gray p-1 m-1 rounded"> some text</div>
              <div className="col-8 gray p-1 m-1 rounded"> some text</div>
              <div className="col-6 gray p-1 m-1 rounded"> some text</div>
              <div className="col-4 gray p-1 m-1 rounded"> some text</div>
            </div>

            <div className="col-12 mb-2 p-2 shadow rounded text-left">
              <p className="d-block">Worked Most with:-</p>
              <div className="row">
                <div className="col-2 text-center">
                  <img
                    className="m-auto rounded-circle"
                    src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg"
                    style={{ width: "100%" }}
                  />
                  <p className="smallFont">John Doe</p>
                </div>
                <div className="col-2 text-center">
                  <img
                    className="m-auto rounded-circle"
                    src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg"
                    style={{ width: "100%" }}
                  />
                  <p className="smallFont">John Doe</p>
                </div>
                <div className="col-2 text-center">
                  <img
                    className="m-auto rounded-circle"
                    src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg"
                    style={{ width: "100%" }}
                  />
                  <p className="smallFont">John Doe</p>
                </div>
                <div className="col-2 text-center">
                  <img
                    className="m-auto rounded-circle"
                    src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg"
                    style={{ width: "100%" }}
                  />
                  <p className="smallFont">John Doe</p>
                </div>
                <div className="col-2 text-center">
                  <img
                    className="m-auto rounded-circle"
                    src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg"
                    style={{ width: "100%" }}
                  />
                  <p className="smallFont">John Doe</p>
                </div>
                <div className="col-2 text-center">
                  <img
                    className="m-auto rounded-circle"
                    src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg"
                    style={{ width: "100%" }}
                  />
                  <p className="smallFont">John Doe</p>
                </div>
              </div>
            </div>

            <div className="col-12 p-3 mb-2 rounded text-left shadow">
              <h2>In these teams</h2>
              <div className="row">
                <div className="col-4 p-2">
                  <img
                    src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg"
                    alt="img"
                    width="100%"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-4 p-2">
                  <img
                    src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg"
                    alt="img"
                    width="100%"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-4 p-2">
                  <img
                    src="https://e-ga.com.au/cms/wp-content/uploads/2014/03/josh-profile-img1-300x300.jpg"
                    alt="img"
                    width="100%"
                    className="rounded-circle"
                  />
                </div>
              </div>
            </div>

            <div className="mb-2 p-2 text-left shadow">
              <h2>Recent activity</h2>
              <a href="#">Link1</a>
              <br />
              <a href="#">Link1</a>
              <br />
              <a href="#">Link1</a>
            </div>
          </div>
          {/* <!-- last column --> */}
          <div className="col-3 bg-light text-left">
            <div className="col-12 p-2">
              <h4 className="light-font">Biography</h4>
              <p className="smallFont">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 p-2">
              <h4 className="light-font">Links</h4>

              
                <Link to="postJob">  <button  style={{backgroundColor:"blue",color:"white"}}>Post Jobs</button></Link>
                <button style={{marginLeft:"3rem",backgroundColor:"red",color:"white"}}>Delete Jobs</button>
                     
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default UserProfile;
