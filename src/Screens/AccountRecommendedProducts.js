import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import RecommendItemInfoCard from "../Components/Cards/RecommendItemInfoCard";


class AccountRecommendedProducts extends Component {


    render() {

        return (
            <div>
                <div className="container">
                            <div className="row">
                                <div className="recommendations mb-5">
                                    <div className="container">
                                        <div className="intro-headline d-flex my-5">
                                            <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                            <h2 className="font-weight-bold">Recommended for you</h2>
                                        </div>           
                                                
                                        <div className="row">
                                            <div className="content">
                                            { this.props.recommendations === [] ? 
                                                <div className="row">
                                                    {this.state.recommendations.map(recommendedproduct => 
                                                        <div key={recommendedproduct.key} className="col-sm-6 col-md-3 mb-3 control">
                                                            <RecommendItemInfoCard name={recommendedproduct.name} price={recommendedproduct.price} />
                                                        </div>
                                                    )}
                                                </div>
                                                :   <div className="noOrders my-5 d-flex">
                                                        <h3 className="ml-4">there is no recommended products!</h3>
                                                        <div className="mx-5">
                                                            <a href="/stores" className="btn btn-lg btn-success">browse stores !</a>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
        );
    }
}

export default AccountRecommendedProducts;
