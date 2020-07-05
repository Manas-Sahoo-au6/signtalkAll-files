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
function App() {
  return (
    <>
      <NavBar />
         <Switch>
           <Route  exact path="/" component={Home}/>
           <Route exact path="/aboutus" component={AboutUs}/>
           <Route exact path="/profile" component={Pie}/>
           <Route exact path="/contactus" component={ContactUs}/>
           <Route exact path="/admin" component={Dashboard}/>
          
         </Switch>
    </ >
  )
}

export default App

