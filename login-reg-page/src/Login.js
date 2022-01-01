import React, { Component } from 'react';
import './App.css';
import withRouter from './withRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';
import {FieldOper} from './FieldOper';  
import {SME} from './SME';
import {Reg} from './Reg';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ButtonToolbar,Navbar,Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';   

export class Login extends Component {
    
    constructor() {
        super();
 
        this.state = {
            Email: '',
            Password: '',
            EmployeeRole:''
        }
 
        
        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.EmployeeRole = this.EmployeeRole.bind(this);
        this.login = this.login.bind(this);
    }
 
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    EmployeeRole(event) {
        this.setState({ EmployeeRole: event.target.value })
    }
    login(event) {
        debugger;
        fetch('https://localhost:44349/Api/login/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password,
                EmployeeRole:this.state.EmployeeRole,
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);                        //to display status of logging ihto account
                if (result.Status === 'Invalid')
                    alert('Invalid User');
                else 
                    if(this.state.EmployeeRole==='sme'){
                        alert('Logged In Successfully!');
                        window.location.href=("/SME");
                    }
                    else {
                        alert('Logged In Successfully!')
                        window.location.href=("/FieldOper");
                    }
                    
            })
    }
    //Login page for logging in
    render() {
        return (
            <div className="app flex-row align-items-center background">
                <br/>
                <br/>
                
                <Container>
                <Navbar className="navigation-bar" bg="light" expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                    <Navbar.Brand className="text-white"><img src="https://vectorlogoseek.com/wp-content/uploads/2018/12/larsen-and-toubro-infotech-lti-vector-logo.png" width="50" height="30"/></Navbar.Brand>
                    </Nav>
                    <Nav className="mr-auto">
                        <button  class="btn"><Link to={'/Reg'} className="nav-link">Register</Link></button>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <br/>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div className="row" 
                                            class="mb-2 pageheading">
                                                <div className="col-sm-12 btn btn-primary">
                                                Login with your Credentials!
                                                </div>
                                            </div>
                                            <InputGroup className="mb-3">
                                                <Input type="text" 
                                                 onChange={this.Email} 
                                                 placeholder="Enter Email" />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="password" 
                                                onChange={this.Password} 
                                                placeholder="Enter Password" />
                                            </InputGroup>
                                            <InputGroup className="mb-4 align-items-stretch" required>
                                            <div >
                                            <strong>Select Role:</strong>
                                            <br/>
                                            <label> 
                                                <input
                                                type="radio"
                                                name="role"
                                                value="sme"
                                                onChange={this.EmployeeRole}
                                                />SME
                                            </label>
                                            <br/>
                                            <label> 
                                                <input
                                                type="radio"
                                                value="fo"
                                                name="role"
                                                onChange={this.EmployeeRole}
                                                />Field Operator
                                            </label>
                                            
                                            </div>      
                                            </InputGroup>
                                            <Button onClick={this.login} 
                                            color="success" block>Login</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default withRouter(Login);