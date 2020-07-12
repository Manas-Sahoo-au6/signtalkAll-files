import React from "react";
import Div from "./Div";
import P from "./P";
import H2 from "./H2";
import './profile.css'
export default function Section1(props) {
  console.log(props.data.email)
  
  let {
   language,
    _id,
    email,
    password,
    firstName,
    lastName,
    region,
    Registered,
    Background,
    Expertise,
  } = props.data
  console.log(language)
  return (
   
    <Div style={{ marginTop: "5rem" }}>
      <Div className="col-12 container d-flex" >
        <Div className="col-2 p-0 m-0">
          <img
            className="person_logo"
            width="100%"
            style={{ borderRadius: "50%" ,width:"149px",height:"145px",marginTop:"1.5rem"}}
            src="https://media-exp1.licdn.com/dms/image/C5603AQF8arJJgHpPjQ/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=dczxN_2g3BCMc505Y0YSLfy-WcuagyoFKYgyQZ8sUSQ"
            alt="img"
          />
        </Div>
        <Div className="col-2 p-0 mt-5" >
      
          <form>
            <input
              style={{
                color: "purple",
                height: "auto",
                width: "6rem",
                backgroundColor: "#4301a6",
              }}
              className="ml-5 p-0"
              type="file"
              id="myFile"
              name="filename"
            />
            <input
              className="mt-3 ml-5"
              type="submit"
              style={{
                color: "white",
                backgroundColor: "#4301a6",
                width: "auto",
                height: "auto",
              }}
            />
          </form>
        </Div>

        <Div  className="col-4 p-4" >
            <h2>{firstName}{lastName}</h2>
          <Div>
            <P className="m-0">I am From {region}</P>
            <P className="m-0">Background : {Background}</P>
            <P className="m-0">Expertise : {Expertise}</P>
          </Div>
        </Div>

        <Div className="col-4 p-4 text-center col-2" >
          <h4>Registered Details.</h4>
          <Div >
            <P>{Registered}</P>
          </Div>
        </Div>
        <Div className="col-4 p-4 text-center col-2" >
          <h4>Language Known</h4>
          <Div>
            <p>{language}</p>
            
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
