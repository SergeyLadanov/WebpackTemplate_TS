import React, { useEffect } from 'react';

import '../scss/styles.scss';
import '../css/offcanvas.css';
import '../css/index.css';
import { Dropdown } from 'bootstrap';


function ToogleOffcanvasClickHandler() 
{
  document.querySelector('.offcanvas-collapse').classList.toggle('open');
}


function Navbar()
{
    useEffect(() => {
        // Activate dropdown
        document.querySelectorAll('[data-bs-toggle="dropdown"]')
            .forEach(item => {
            new Dropdown(item)
        })
    });


    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">Title</a>
                <button className="navbar-toggler p-0 border-0" type="button" onClick={ToogleOffcanvasClickHandler} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbars">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" id = "item1_id">Item1</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#" id = "item2_id">Item2</a>
                    </li>

                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="true">Item3</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown01">
                        <li><a className="dropdown-item" href="#" id = "subitem1_id">subitem1</a></li>
                        <li><a className="dropdown-item" href="#" id = "subitem2_id">subitem2</a></li>
                        <li><a className="dropdown-item" href="#" id = "subitem3_id">subitem3</a></li>
                    </ul>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#" id = "item4_id">Item4</a>
                    </li>
                </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;