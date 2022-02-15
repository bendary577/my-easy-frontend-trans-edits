
import React, { Component } from "react";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from "../ScreenSnippets/accounts/Footer";
import CartItemInfoCard from "../Components/Cards/CartItemInfoCard";
import axios from 'axios';
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";

class MyCart extends Component {

    state = {
        cartproducts: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/cart')
            .then(res => {
                const cartproducts = res.data;
                this.setState({ cartproducts });
            })
    }

    render() {

        return (
            <div>
            <div className="d-flex" id="wrapper">

                <AccSideNavbar user={'seller'}/>                      

                <div id="page-content-wrapper">
                    <AccNavbar />
                
                    <div class="container-fluid">

                  

                    <div className="container">

                        <div className="intro-headline d-flex my-5">
                            <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                            <h2 className="font-weight-bold">My Cart</h2>
                        </div>

                            <div className="content">
                                {this.state.cartproducts === [] ?
                                    <div className="row">
                                        {this.state.cartproducts.map(cartproduct =>
                                            <div key={cartproduct.key} className="col-sm-6 col-md-3 mb-3 control">
                                                <CartItemInfoCard name={cartproduct.name} price={cartproduct.price} />
                                            </div>
                                        )}
                                    </div>
                                    
                                    : 
                                    
                                    <div className="noOrders my-5 d-flex"  style={{ height: 500 }}>
                                        <h1>you have no products added to your cart yet!</h1>
                                        <div className="mx-5">
                                            <a href="/stores" className="btn btn-lg btn-success">Buy now !</a>
                                        </div>
                                    </div>
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

export default MyCart;
