import React, { Component } from 'react';
import withRouter from './withRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, ButtonGroup } from 'reactstrap';
import { ButtonToolbar,Navbar,Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import {Login} from './Login'; 
export class Reg extends Component {
  constructor() {
    super();
    this.state = {
      
      Email: '',
      Password: '',
      EmployeeName: '',
      EmployeeRole: ''
    }

    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.EmployeeName = this.EmployeeName.bind(this);
    this.EmployeeRole = this.EmployeeRole.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
    
  }

  Email(event) {
    this.setState({ Email: event.target.value })
  }
 
  Password(event) {
    this.setState({ Password: event.target.value })
  }
  
  EmployeeName(event) {
    this.setState({ EmployeeName: event.target.value })
  }
  EmployeeRole(event) {
    this.setState({ EmployeeRole: event.target.value })
  }
  //method to add data of new employee to database
  register(event) {
    fetch('https://localhost:44349/Api/login/InsertEmployee', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Email: this.state.Email,
        Password: this.state.Password,
        EmployeeName: this.state.EmployeeName,
        EmployeeRole: this.state.EmployeeRole
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status === 'Invalid')
          alert('Sorry! Un-authenticated User !');
        else 
                    if(this.state.EmployeeRole==='sme'){
                        alert('Registered Successfully');
                        window.location.href=("/SME");
                    }
                    else {
                        alert('Registered Successfully')
                        window.location.href=("/FieldOper");
                    }
      })
  }
  //registration form for registering a new employee
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
                        <button  class="btn"><Link to={'/Login'} className="nav-link">Login</Link></button>
                    </Nav>
              </Navbar.Collapse>
          </Navbar>
          <br/>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div className="row" className="mb-2 pageheading">
                      <div className="col-sm-12 btn btn-primary">
                        Register New Employee
                        </div>
                    </div>
                    <InputGroup className="mb-3">
                      <Input type="text"  
                      onChange={this.EmployeeName} required placeholder="Enter Employee Name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  
                      onChange={this.Email} required placeholder="Enter Email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password"  
                      onChange={this.Password} required placeholder="Enter Password" />
                    </InputGroup>
                    <InputGroup className="mb-4 align-items-stretch" required>
                    <div >
                    <strong>Select Role:</strong>
                    <br/>
                    <label> 
                        <input
                          type="radio"
                          value="sme"
                          name="role"
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
                  <Button  onClick={this.register}  
                    color="success" block>Register</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Reg);


