import { ajax } from 'jquery';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top">
        <img src="images/logo.png" alt="Learn" className="logo"/>
        <a className="navbar-brand" href="#">Learn</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
         
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Book Categories
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" href="#">Contact Us</a>
            </li>   
            </ul>

            <div className="nav-right ml-auto">
            <a href="">
            <img src="images/user.png" alt="login" id="user"/>
            <span>Log in </span>
            </a>
            <a className="btn btn-outline-primary btn-lg sign-up">Sign Up</a>
            </div>
        </div>  
        </nav>
    );
}

export default Navbar;

