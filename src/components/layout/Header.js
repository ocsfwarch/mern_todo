import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-test" >
            <div className="navbar-brand" title="MERN ToDo">
                <div style={{flex:'10', padding: '5px', color:'white'}}>MERN ToDo Application</div>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSuppportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            
             <div className="collapse navbar-collapse" id="navbarSuppportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item nav-item-ocsa">
                    <Link to="/" className="nav-link btn btn-dark btn-ocsa">Home</Link>
                </li>
                <li className="navbar-item nav-item-ocsa">
                    <Link to="/about" className="nav-link btn btn-dark btn-ocsa">About</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;