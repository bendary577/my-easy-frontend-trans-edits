import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import ProductCarousel from "../Components/ProductsCarousel";
import ViewItemInfoCard from "../Components/Cards/ViewItemInfoCard";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import CategoriesNavbar from "../ScreenSnippets/accounts/CategoriesNavbar";
import CommentSection from "../Components/Comments/CommentSection";


class ViewItemDetails extends Component {

    render() {
        return (
            <div className="parent-div">
                <AccNavbar />
                <CategoriesNavbar />
                <div className="container">

                    {/* ------------------------------- links -------------------------------------------- */}
                    <div className="links d-flex mt-5 mb-4">
                        <a href="#" className="text-dark font-weight-bold">
                            Electronics
                        </a>
                        <p className="font-weight-bold mx-3">  </p> 
                        <a href="/sellerprofile" className="text-dark font-weight-bold">
                            Mosaad Store
                        </a>
                    </div>

                     {/* ------------------------------- item card -------------------------------------------- */}

                    <ViewItemInfoCard />

                    {/* ------------------------------- item card -------------------------------------------- */}

                    {/*
                    <CommentSection />
                    */}
                    {/* ------------------------------- others watched -------------------------------------------- */}

                    <div className="otherWatched bg-light p-5 my-5">
                        <h3 className="font-weight-bold mb-3">Others watched</h3>

                        <ProductCarousel />
                    </div>

                    

                    {/* ------------------------------- others bought  -------------------------------------------- */}
                    
                    <div className="othersBought bg-light p-5 my-5">
                        <h3 className="font-weight-bold mb-3">Others bought</h3>
                        <ProductCarousel />
                    </div>


                    {/* ------------------------------- facing issue -------------------------------------------- */}
                    
                    <div className="issue bg-light p-5 my-5 clearfix">
                        <div className="float-left w-50">
                            <h3 className="font-weight-bold mb-3">Having an issue ? </h3>
                        </div>
                        <div className="float-right w-50">
                           <div className="d-flex justify-content-arount">
                                <div className="mr-5">
                                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                    <h4>Call Us</h4>
                                </div>

                                <div className="ml-5">
                                    <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
                                    <h4>Call Us</h4>
                                </div>

                           </div>
                        </div>
                    </div>

                    

                </div>

                <Footer />
            </div>
        );
    }
}

export default ViewItemDetails;
