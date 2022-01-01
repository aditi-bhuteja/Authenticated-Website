import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditReqModal extends Component{
    constructor(props){
        super(props);
        this.state={SME:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:6102/Api/fo')
        .then(response=>response.json())
        .then(data=>{
            this.setState({SME:data});
        });
    }
    //method to update assigned request to our database
    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44349/Api/fo',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:event.target.Id.value,
                PIEname:event.target.PIEname.value,
                SMEname:event.target.SMEname.value,
                IssueCategory:event.target.IssueCategory.value,
                Status:event.target.Status.value,
                Date_Time:event.target.Date_Time.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    //form to assign the existing request to a SME
    render(){
        return (
        <div className="container">

        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header clooseButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Assign Request
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Row>
                <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="Id">
                                <Form.Label>Request Number</Form.Label>
                                <Form.Control type="text" name="Id" required 
                                placeholder="Request Number"
                                disabled
                                defaultValue={this.props.id}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="PIEname">
                                <Form.Label>Requestor</Form.Label>
                                <Form.Control type="text" name="PIEname" required 
                                defaultValue={this.props.piename}
                                placeholder="Requestor"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="SMEname">
                        <Form.Label>SME</Form.Label>
                        <Form.Control type="text" name="SMEname" required 
                        defaultValue={this.props.smename}
                        placeholder="SME Name"/>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="IssueCategory">
                                <Form.Label>Issue Category</Form.Label>
                                <Form.Select aria-label="Default select example" defaultValue={this.props.issuecategory} required name="IssueCategory" required>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="ProductID">
                                <Form.Label>Product ID</Form.Label>
                                <Form.Control type="number" name="Product Id" required 
                                defaultValue={this.props.productid}
                                placeholder="Product ID"/>
                            </Form.Group>
                        </Col>
                        </Row>
                        <Form.Group controlId="Status">
                            <Form.Label>Status</Form.Label>
                            {/* <Form.Control type="text" defaultValue={this.props.Status} placeholder="Assigned/Unassigned"/> */}
                            <Form.Select aria-label="Default select example" defaultValue={this.props.status} required name="Status" required>
                            <option value="Assigned">Assigned</option>
                            <option value="Unassigned">Unassigned</option>
                            <option value="InProgress">In Progress</option>
                            <option value="Completed">Completed</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="Date_Time">
                            <Form.Label>Schedule Date and Time</Form.Label>
                            <Form.Control type="text" name="Date_Time" required 
                            defaultValue={this.props.datetime}
                            placeholder="YYYY-MM-DD HH:MM:SS"/>
                        </Form.Group>    
                        <hr></hr>              
                        <Form.Group>
                            <Button variant="primary" type="submit">
                                SAVE
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>

            </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>

        </div>
        )
    }

}
