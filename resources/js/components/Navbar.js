import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light">
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
            <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
            </li>   
            </ul>
        </div>  
        </nav>
    );
}

export default Navbar;

