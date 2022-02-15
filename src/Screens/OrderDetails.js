import React, { Component } from 'react';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import Footer from '../ScreenSnippets/accounts/Footer';
import Wrong from "../../public/icons/profile/wrong.png";

class OrderDetails extends Component {
    render() {
        const imageStyle = {
            width:250,
            height:250
        };

        return (
            <div className="parent">
                <AccNavbar />

                <div className="order-details pt-5" style={{height:500}}>
                    <div className="container my-5">
                        {this.props.order === null ? 
                            <div className="row">
                                <div className="col-xs-12 col-lg-4">
                                    <img className="w-100 h-100" src={this.props.order.item.image} />
                                </div>

                                <div className="col-xs-12 col-lg-6 font-weight-bold">
                                    <table className="table table-striped">
                                        <tr>
                                            <td>Item Name</td>
                                            <td>{this.props.order.item.name}</td>
                                        </tr>

                                        <tr>
                                            <td>Seller Name</td>
                                            <td>{this.props.order.item.sellername}</td>
                                        </tr>

                                        <tr>
                                            <td>Customer Name</td>
                                            <td>{this.props.order.item.customername}</td>
                                        </tr>

                                        <tr>
                                            <td>Order Date</td>
                                            <td>{this.props.order.date}</td>
                                        </tr>

                                        <tr>
                                            <td>Item Price</td>
                                            <td className="text-success">
                                                <h4>{this.props.order.item.price}</h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>State</td>
                                            <td>{this.props.order.status}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        :   <div className="text-center">
                                <img src={Wrong} style={imageStyle} className="" alt="" />
                                <h3 className="mt-4">Sorry! something went wrong!</h3>
                            </div>
                    }   
                    </div>
                </div>        
                <Footer /> 
        </div>
        )
    }
}

export default OrderDetails;