import React, { Component } from 'react';
import { Form, Container, Button, Col, Row } from 'react-bootstrap';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import createStore from "../../public/images/Store/create-invoice.png";
import Footer from "../ScreenSnippets/accounts/Footer";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";


class MakeInvoice extends Component {

    constructor(props){
        super(props);
        this.state = {
           create_link : false 
        }
    }

    enableCreateLink = () =>{
        this.setState({
            create_link : true
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
                            }}>Create Your Invoice now!</h1>
                        </div>

                        {/**---------------------------- image ------------------------------------ */}
                        <Row>
                            <Col xs={12} lg={6}>
                                <img className="" src={createStore} style={imageStyle} alt="create store" />
                            </Col>

                        {/**----------------------------form ------------------------------------ */}
                            <Col xs={12} lg={6} className="m-auto">
                                <Form>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="text" placeholder="Buyer Name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Product" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="number" placeholder="Amount" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="number" placeholder="Product Price" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="number" placeholder="Total Price" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date From:</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date End:</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                    <Form.Group controlId="shareable-link">
                                        <a href="javascript:;" class="btn btn-success btn-block" onClick={()=> {this.enableCreateLink()}}>create shareable link</a>
                                    </Form.Group>

                                    {
                                        (   
                                            this.state.create_link === true && 
                                            <Form.Group controlId="shareable-link">
                                                <div class="">
                                                    <div className="alert alert-success">
                                                        <a href="/pay_invoice" className="text-primary">http://localhost:3000/pay_invoice</a>
                                                    </div>
                                                </div>
                                            </Form.Group> 
                                        )
                                    }
                                    <Col xs={12} className="text-center">
                                        <Button variant="primary" type="submit" className="btn btn-primary btn-block">Send</Button>
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

export default MakeInvoice;