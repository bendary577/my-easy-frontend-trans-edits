
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import OrdersTable from "../ScreenSnippets/orders/OrdersTable";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";
import SellerService from "../Services/SellerService";

class MyOrders extends Component {

    state = {
        orders: [],
        loading : false,
      }
    
    componentDidMount = () => {
       this.getMyOrders();
    }

    getMyOrders = () => {
        let response = SellerService.getMyOrders();
        if(response.status == 200){
            this.setState({ orders : response.data.data });
        }else{

        }
    }

    render() {

        return (
            <div>
            <div className="d-flex" id="wrapper">

                <AccSideNavbar user={'seller'}/>                      

                <div id="page-content-wrapper">
                    <AccNavbar />
                
                    <div class="container-fluid">

                    <div className="container" >
                        <div className="intro-headline d-flex my-5">
                            <FontAwesomeIcon icon={faMoneyBill} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                            <h2 className="font-weight-bold">My Orders</h2>
                        </div>

                        <div className="content">
                                { this.state.orders.length === 0 ? 
                                    <div className="noOrders my-5 d-flex" style={{height:500}}>
                                    <h1>you have no orders yet!</h1>
                                    <div className="mx-5">
                                        <a href="/stores" className="btn btn-lg btn-success">Start Your Shopping now !</a>
                                    </div>
                                </div>
                                :    
                                <OrdersTable orders={this.state.orders}/>
                                }            
                        </div>
                        
                    </div>
                    </div>
                    </div>  
                </div>
            <Footer/>
        </div>
        );
    }
}

export default MyOrders;
