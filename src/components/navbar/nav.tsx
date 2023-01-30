import React from "react";
import { Link } from "react-router-dom";


export const NavBar =()=>{


    return<>
    
    <nav className=" flex justify-content-around navbar navbar-expand-md fixed-top  navbar-dark p-4 navBarColor">
  <a className="navbar-brand navtxt" href="#"><b>Arunitech!</b></a>
  <button className="navbar-toggler" style={{borderColor:"rgb(227,132,34)"}} type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon" style={{borderColor:"rgb(227,132,34)"}} ></span>
  </button>
  <div className="collapse navbar-collapse"  id="collapsibleNavbar">
    <div style={{width:"80%"}}>
    <ul className=" navbar-nav  ml-5" style={{width:"80%"}}>
      <li className="nav-item ml-5" >
      <Link className="nav-link navtxt"  to="*" ><span className="navtxt" >Home</span></Link>
      </li>
      <li className="nav-item ml-5" >
      <Link className="nav-link" to="/About" ><span className="navtxt" >About</span></Link>
      </li>
    
      <li className="nav-item ml-5 navtxt" >
      <Link className="nav-link" to="/ContactUS" ><span className="navtxt" >Contact us</span></Link>
      </li> 

    </ul> 
  </div>  
    </div>
</nav>

    
    </>
}