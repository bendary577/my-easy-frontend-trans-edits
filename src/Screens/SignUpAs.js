
import React, { Component } from "react";
import "../../public/css/signupas.css";
import customer from "../../public/icons/login&registeration/customer.png";
import individual from "../../public/icons/login&registeration/individual.png";
import company from "../../public/icons/login&registeration/company.png";
import {Link} from "react-router-dom";

class SignUpAs extends Component {
    render() {

        const iconImgsStyle = {
            width: 300,
            height: 300
        };

        return (
            <div className="registerAs">
                <div class="jumbotron">
                    <h1>My Easy Registration</h1>
                    <h2>Thanks for visiting us...</h2>
                </div>

                <div className="headline">
                    <h2 className="my-4">Would you like to register as</h2>
                </div>

                {/*-------------------------------------- controls------------------------------------*/}

                <div className="buttons my-5">
                    <div className="container">
                        <div className="row">

                            {/*---------------------------- card1-----------------------------*/}

                            <div className="col-sm-12 col-md-4 my-2">
                                <div class="card w-100 m-0">
                                    <img
                                        src={customer}
                                        alt="Logo1"
                                        calssName="img img-responsive"
                                        style={iconImgsStyle}
                                    />
                                    <div className="card-body text-center">
                                        <Link to={{ pathname: '/signup', state: { type : 'customer' } }} className="btn btn-primary btn-lg">Customer</Link>
                                    </div>
                                </div>
                            </div>

                            {/*---------------------------- card2-----------------------------*/}

                            <div className="col-sm-12 col-md-4 my-2">
                                <div className="card w-100 m-0">
                                    <img
                                        src={individual}
                                        alt="Logo1"
                                        calssName="img img-responsive"
                                        style={iconImgsStyle}
                                    />
                                    <div className="card-body text-center">
                                    <Link to={{ pathname: '/signup', state: { type : 'seller' } }} className="btn btn-warning btn-lg">Individual Seller</Link>
                                    </div>
                                </div>
                            </div>

                            {/*---------------------------- card3-----------------------------*/}

                            <div className="col-sm-12 col-md-4 my-2">
                                <div className="card w-100 m-0">
                                    <img
                                        src={company}
                                        alt="Logo1"
                                        calssName="img img-responsive"
                                        style={iconImgsStyle}
                                    />
                                    <div className="card-body text-center">
                                        <Link to={{ pathname: '/signup', state: { type : 'company' } }} className="btn btn-dark btn-lg">Company</Link>
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

export default SignUpAs;
