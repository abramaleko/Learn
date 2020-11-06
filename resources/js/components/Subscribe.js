import React from 'react'

function Subscribe()
{
    return (
        <div className="subscribe container-fluid">
            <div className="header">
                <h1 className="header1">Subscribe To Our Newsletter</h1>
                 <p className="headerText">Stay up to date with our latest books and promotions</p>
                 <input type="text" className="form-control mx-auto" placeholder="Enter you're email"/>
                 <a href="" className="btn btn-warning btn-lg btnsubscribe">SUBSCRIBE</a>
            </div>
        </div>
    );
}

export default Subscribe;
