import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import {Button,ButtonToolbar,Navbar,Nav} from 'react-bootstrap';
import ProtectedRoute from './ProtectedRoutes';
import {FieldOper} from './FieldOper';  
import {SME} from './SME'; 

//navigation bar at home page displaying login and register option
export class NaviBar extends Component{
    render(){
    return(
    <div className="background">
    <div className="container">
        <Navbar className="navigation-bar" bg="light" expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                    <Navbar.Brand className="text-white"><img src="https://vectorlogoseek.com/wp-content/uploads/2018/12/larsen-and-toubro-infotech-lti-vector-logo.png" width="50" height="30"/></Navbar.Brand>
                    </Nav>
                    <Nav className="mr-auto">
                        <button  class="btn"><Link to={'/Login'} className="nav-link">Login</Link></button>
                        <button  class="btn"><Link to={'/Reg'} className="nav-link">Register</Link></button>

                    </Nav>
                </Navbar.Collapse>
        </Navbar>

        </div>
    </div>
    )
    }
}

export default NaviBar;