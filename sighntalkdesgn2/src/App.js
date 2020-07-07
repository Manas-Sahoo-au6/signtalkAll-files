import React from 'react'
import './App.css';
import {Switch,Route}  from 'react-router-dom';
import Home from './Home'
import Services from './Services'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Dashboard from './components/Dashboard/Dashboard'
import NavBar from './components/NavBar'
import Pie from './components/Chart/Pie'
import Body from './components/Chart/Body'
import Register from './components/Login/Register';
function App() {
  return (
    <>
      <NavBar />
         <Switch>
           <Route  exact path="/" component={Home}/>
           <Route exact path="/aboutus" component={AboutUs}/>
           <Route exact path="/profile" component={Body}/>
           <Route exact path="/contactus" component={ContactUs}/>
           <Route exact path="/admin" component={Dashboard}/>
           <Route exact path="/regint" component={Register}/>
         </Switch>
    </ >
  )
}

export default App

