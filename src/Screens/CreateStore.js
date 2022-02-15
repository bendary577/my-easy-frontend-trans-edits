import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import createStore from "../../public/images/Store/create-store.png";
import Footer from "../ScreenSnippets/accounts/Footer";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";

class CreateStore extends Component {
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
                    <div className="container">

                        {/**----------------------------header ------------------------------------ */}

                        <div className="header">
                            <h1 className="text-center" style={{
                                color: '#556a87', fontSize: '30px', fontWeight: 'bold', marginBottom: '25px', marginTop : '20px'
                            }}>Create Your Store and start gaining money!</h1>
                        </div>

                        {/**---------------------------- image ------------------------------------ */}

                        <div className="row">
                            <div className="col-sm-12 col-lg-6 m-auto">
                                <img className="" src={createStore} style={imageStyle} alt="create store" />
                            </div>

                        {/**---------------------------- form ------------------------------------ */}
                            <div className="col-sm-12 col-lg-6 m-auto">
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="font-weight-bold">Store Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="font-weight-bold">Store Description</Form.Label>
                                        <textarea id="token" name="token" rows="4" cols="50" placeholder="store description" style={{width : "100%"}}>
        
                                        </textarea>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="font-weight-bold">Specialization</Form.Label>
                                        <Form.Control as="select" defaultValue="">
                                            <option>--Select--</option>
                                            <option>Electric</option>
                                            <option>Laptop</option>
                                            <option>Laptop</option>
                                            <option>Laptop</option>
                                            <option>Laptop</option>
                                            <option>Laptop</option>
                                            <option>Laptop</option>
                                            <option>Laptop</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <a href="/mystore" className="btn btn-lg btn-primary">Create Store</a>
                                </Form>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>  
                </div>
            <Footer/>
        </div>
        )
    }
}

export default CreateStore;