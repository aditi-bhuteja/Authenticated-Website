import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {FieldOper} from './FieldOper';  
import {SME} from './SME'; 
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';   

export class Dashboard extends Component {
    render() {
 
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav className="d-inline p-2 bg-dark text-white">
                            Please click on your Role :
                        </Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/FieldOper">
                            FO
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/SME">
                            SME
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default Dashboard;