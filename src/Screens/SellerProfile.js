
import React, { Component } from "react";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import person from "../../public/images/person_2.jpg";
import medal from "../../public/images/medal.png";
import star from "../../public/images/star.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faPhone, faStore } from "@fortawesome/free-solid-svg-icons";
import ProductCarousel from "../Components/ProductsCarousel";
import "../../public/css/sellerprofile.css";
import Footer from "../ScreenSnippets/accounts/Footer";

class SellerProfile extends Component {


    render() {

        const iconImgsStyle = {
            width: 230,
            height: 230
        };

        const medalStyle = {
            width: 35,
            height: 35
        };

        const starStyle = {
            width : 25,
            height : 25
        }

        return (
            <div className="parent-div">

                <AccNavbar />

                {/*------------------------------ left side bar --------------------------------------------- */}

                <div className="container">

                    <div className="intro-headline d-flex my-5">
                        <FontAwesomeIcon icon={faUser} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                        <h2 className="font-weight-bold">Seller Profile</h2>
                    </div>

                    <div className="row">

                        <div className="left-div col-md-12 col-lg-3 mb-3">
                            <div className="profile-image text-center bg-light rounded">
                                <img src={person} class="rounded-circle img img-responsive" alt="profile-img" style={iconImgsStyle} />
                                <br />
                            </div>

                            <div className="bio mt-4 bg-light rounded p-4 text-center">
                                <p className="font-weight-bold text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'.</p>
                            </div>
                        </div>

                        {/*------------------------------ right side bar --------------------------------------------- */}

                        <div className="right-div col-md-12 col-lg-9 bg-light ">

                            <div className="sellerName d-flex m-3">
                                <h4 className="font-weight-bold">Seller Name</h4>
                                <img src={medal} style={medalStyle} className="" />
                            </div>

                            <div className="rating m-3" >
                                <span class="fa fa-star checked"></span>
                                <div className="d-flex">
                                    <p className="text-success mr-2 font-weight-bold">4.6</p>
                                    <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                </div>
                                 <h5 className="text-success font-weight-bold"> 21 ratings</h5>
                            </div>

                            <div className="m-3">
                                <h5 className="">Seller has served <strong className="text-success">23 customers</strong></h5>
                                <h5 className="">Seller has ordered <strong className="text-success">45 orders</strong></h5>
                                <h5 className="">Order delivery speed <strong className="text-success">intermediate</strong></h5>
                            </div>

                            <div className="d-flex m-3">
                                <div className="phone">
                                    <button className="btn btn-success" data-toggle="collapse" data-target="#phone">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2"></FontAwesomeIcon>
                                        contact by phone 
                                    </button>
                                    <div id="phone" className="collapse">
                                        <h5 className="font-weight-bold mt-2">01120735296</h5>
                                    </div>
                                </div>

                                <div className="mail ml-3">
                                    <button className="btn btn-primary" data-toggle="collapse" data-target="#mail">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2"></FontAwesomeIcon>
                                        contact by e-mail
                                    </button>
                                    <div id="mail" className="collapse">
                                        <h5 className="font-weight-bold mt-2"> mohamedyossif577@gmail.com</h5>
                                        <button className="btn btn-sm btn-primary">send mail</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*------------------------------ lower row --------------------------------------------- */}

                    <div className="row">

                         <div className="rating col-md-6 mt-3 bg-light clearfix p-4 m-3">
                            <h5 className="float-left font-weight-bold mt-2">Rate this seller now !</h5>
                            <div className="float-right">
                                <img src={star} style={starStyle} className="star" />
                                <img src={star} style={starStyle} className="star" />
                                <img src={star} style={starStyle} className="star" />
                                <img src={star} style={starStyle} className="star" />
                                <img src={star} style={starStyle} className="star" />
                            </div>
                         </div>

                         <div className="rating col-md-6 mt-3 bg-light d-flex p-4 m-3">
                            <h5 className="font-weight-bold mt-2">visit seller store </h5>
                            <a href="/store" className="btn btn-danger ml-5">
                                <FontAwesomeIcon icon={faStore} className="mr-2"></FontAwesomeIcon>
                                store
                            </a>
                         </div>
                    </div>

                    {/*------------------------------  carousel --------------------------------------------- */}

                    <div className="selleritems m-5">
                        <h4 className="font-weight-bold mb-3">Seller also sells this items !</h4>
                        <ProductCarousel />
                    </div>
                
                </div>

                <Footer />
            </div>

        );
    }
}

export default SellerProfile;
