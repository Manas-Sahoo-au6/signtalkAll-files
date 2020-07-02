import React from "react";
import { Link } from "react-router-dom";
import logopic from '../images/logo.png'

import './NavBar.css'   
function NavBar() {
  return (
    <>
      <div className="navbar">
      
        <Link to="/"  ><span><img src = {logopic} width="100" alt="logo" /></span> </Link>
        <Link to="/login"  >Register</Link>
         
        {localStorage.getItem("token") ? (
          <Link to="/logout"  >Logout</Link>
        ) : (
            <Link to="/login"  >Login or Register</Link>
        )}
      </div>
    </>
  );
}

export default NavBar;
