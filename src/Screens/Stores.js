import React, { Component } from "react";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import BrowseStoreSideNav from "../Components/BrowseStoreSideNav";
import CategoriesNavbar from "../ScreenSnippets/accounts/CategoriesNavbar";
import StoreCarousel from "../Components/Carousels/StoreCarousel";
import Footer from "../ScreenSnippets/accounts/Footer";
import "../../public/css/stores.css";

class Stores extends Component {


    render() {

        return (
            <div>
                <div className="d-flex" id="wrapper">
                    <BrowseStoreSideNav />
                    <div id="page-content-wrapper">
                        <AccNavbar />
                        <CategoriesNavbar />

                        <div class="container-fluid">

                            <div className="mt-5">
                                <StoreCarousel />
                            </div>

                            <div className="offerimg w-100 mt-5 d-flex justify-content-center align-items-center text-white text-center">
                                <h2 className="font-weight-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            </div>

                            <div className="my-5">
                                <StoreCarousel />
                            </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

            

        );
    }
}

export default Stores;
