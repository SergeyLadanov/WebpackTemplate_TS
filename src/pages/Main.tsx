import React, { useEffect } from 'react';
import '../scss/styles.scss';


function Main()
{
    return (
        <div className="row">
            {/* <div className="row" style={{textAlign: "center"}} id = "loading">
                <p>
                <div className="col-md-12">
                    <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                </p>
            </div> */}

            <div className="col-md-12">
                <p><h3>Start page</h3></p>
            </div>
            <a href="#" className="btn btn-primary" role = "button">Click me</a>
        </div>
    );
}

export default Main;