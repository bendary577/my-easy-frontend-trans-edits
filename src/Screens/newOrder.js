import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";
import PDFDocument from "./PDFDocument";
import { PDFViewer } from '@react-pdf/renderer';



class NewOrder extends Component {

    constructor(props){
        super(props);
        this.state = {
            enableViewPdf : false,
        }
    }

    enableViewPdf = () => {
        this.setState({
            enableViewPdf : !this.state.enableViewPdf
        })
    }

    render() {

        const userType = "seller";
        const order = {
            id : 22,
            product : {
                name : "order",
                price : "12"
            },
            customer : {
                name : "hamdy"
            },
            created_at : "12/3/1998"   
        }


        return (
            <div>
                <div className="d-flex" id="wrapper">

                    <AccSideNavbar user={userType}/>                      

                    <div id="page-content-wrapper">
                        <AccNavbar />
                    
                        <div class="container-fluid">

                        {/**------------------------------------- account intro row ---------------------------------- */}

                            <div className="row">
                                <div className="intro-headline d-flex my-5 ml-4">
                                    <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                    <h2 className="font-weight-bold">New Order</h2>
                                </div>
                            </div>
                             {/**------------------------------------- recommentation row ---------------------------------- */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div class="alert alert-success p-3" role="alert">
                                        a new customer ordered a product from your store
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div class="d-flex" >
                                        <a href="/my_orders" className="mt-2">check my orders</a>
                                        <a href="" className="btn btn-success ml-5">change order status to being prepared</a>
                                        <a href="javascript:;" className="btn btn-danger ml-5" onClick={() => this.enableViewPdf()}>generate order file</a>
                                        <div className="">
                                            {/*<PDF />*/}
                                        </div>
                                    </div>
                                </div>
                                {
                                (
                                this.state.enableViewPdf === true &&
                                <div className="container my-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="pdf-view w-100">
                                                <PDFViewer width="100%" height="600">
                                                    <PDFDocument />
                                                </PDFViewer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                                }
                            </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
            

        );
    }
}

export default NewOrder;
