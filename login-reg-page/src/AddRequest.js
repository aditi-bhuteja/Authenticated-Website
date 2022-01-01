import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddRequest extends Component{
    constructor(props){
        super(props);
        this.state={fieldoper:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch('https://localhost:44349/Api/fo')
        .then(response=>response.json())
        .then(data=>{
            this.setState({fieldoper:data});
        });
    }
    //method to add new data to our request database 
    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44349/Api/fo',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:null,
                PIEname:event.target.PIEname.value,
                IssueCategory:event.target.IssueCategory.value,
                ReqNumber:event.target.ReqNumber.value,
                ProductID:event.target.ProductID.value,
                Location:event.target.Location.value,
                Manufacturer:event.target.Manufacturer.value

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
    //form for generating new request
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
                        New Request
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="PIEname">
                                    <Form.Label>Requestor</Form.Label>
                                    <Form.Control type="text" name="PIEname" required 
                                    placeholder="Enter your name"/>
                                </Form.Group>
                                <Form.Group controlId="ReqNumber">
                                    <Form.Label>Issue Description</Form.Label>
                                    <Form.Control type="text" name="ReqNumber" required 
                                    placeholder="Breif the issue with the product."/>
                                </Form.Group>
                                <Row>
                                    <Col>
                                    <Form.Group controlId="IssueCategory">
                                    <Form.Label>Issue Category</Form.Label>
                                        <Form.Select aria-label="Default select example" name="IssueCategory" required>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        </Form.Select>
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group controlId="ProductID">
                                        <Form.Label>ProductID</Form.Label>
                                        <Form.Control type="text" name="ProductID" required 
                                        placeholder="Enter ProductID"/>
                                    </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Location">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control type="text" name="Location" required 
                                            placeholder="Enter Location"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Manufacturer">
                                            <Form.Label>Manufacturer</Form.Label>
                                            <Form.Control type="text" name="Manufacturer" required 
                                            placeholder="Enter Manufacturer"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <hr/>
                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Generate Request
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