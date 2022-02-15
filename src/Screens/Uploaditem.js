import React, { Component } from 'react';
import { Form, Container, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import Upload from "../../public/icons/stores/uploaditem.png";
import Footer from "../ScreenSnippets/accounts/Footer";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";

class UploadItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            price : '',
            number: '',
            description: '',
            image: '',
            category: '' 
         };
      }

      handleChange = event => {
        this.setState({ 
            name: event.target.value,
            price: event.target.price,
            number: event.target.number,
            description: event.target.description,
            image: event.target.image,
            category: event.target.category,
            status: event.target.status,     
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const item = {
            name: this.state.name,
            price: this.state.price,
            number: this.state.number,
            description: this.state.description,
            image: this.state.image,
            category: this.state.category,
            status: this.state.status,
            upoladdate: new Date()
        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { item })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }

    render() {

        const imageStyle = {
            width:400,
            height:400
        };

        return (
            <div>
            <div className="d-flex" id="wrapper">

                <AccSideNavbar user={'seller'}/>                      

                <div id="page-content-wrapper">
                    <AccNavbar />
                
                    <div class="container-fluid">
            <div className="contact pt-4 pb-4 my-5" id="contact">
                <Container>

                    {/**----------------------------header ------------------------------------ */}
                    
                        <div className="header">
                            <h1 className="text-center" style={{
                                color: '#556a87', fontSize: '30px', fontWeight: 'bold', marginBottom: '25px'
                            }}>Upload Your Item Now!</h1>
                        </div>

                    <Row>
                    {/**----------------------------image ------------------------------------ */}

                        <Col xs={12} lg={6}>
                                <img className="" src={Upload} style={imageStyle} alt="create store" />
                        </Col>

                    {/**----------------------------form ------------------------------------ */}

                        <Col xs={12} lg={6} className="m-auto">
                            <Form>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="font-weight-bold">Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="font-weight-bold">Price</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="font-weight-bold">Available Number</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="font-weight-bold">Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="font-weight-bold">Category</Form.Label>
                                    <Form.Control as="select">
                                        <option>Electronics</option>
                                        <option>Electronics</option>
                                        <option>Electronics</option>
                                        <option>Electronics</option>
                                        <option>Electronics</option>
                                        <option>Electronics</option>
                                        <option>Electronics</option>
                                        <option>Electronics</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="font-weight-bold">Item Status</Form.Label>
                                    <Form.Control as="select">
                                        <option>New</option>
                                        <option>Used</option>
                                    </Form.Control>
                                </Form.Group>

                                <Col xs={12} className="text-center">
                                    <Button variant="primary" type="submit">
                                        Upload
                                </Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                </div>
                    </div>  
                </div>
                </div>
            <Footer/>
        </div>
        )
    }
}

export default UploadItem;