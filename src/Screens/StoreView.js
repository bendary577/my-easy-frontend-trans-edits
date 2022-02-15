import React, { Component } from 'react';
import '../../public/css/store.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import Footer from '../ScreenSnippets/accounts/Footer';
import store from '../../public/icons/stores/storecard.png';
import ProductCarousel from '../Components/ProductsCarousel';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import star from '../../public/icons/stores/star.png';


class StoreView extends Component {
    render() {

        const storeImgStyle = {
            width : "100%",
            height : "100%"
        }
        return (
            <div className="parent" >

            <AccNavbar />

            <div className="container">
                <div class="row my-5">
                    <div class="col-md-4 text-center">
                        <img src={store} style={storeImgStyle} className="rounded" alt="store avatar" />
                    </div>
                    <div class="col-md-8  align-items-start">
                        <div className="clearfix">
                            <h2 className="float-left">Store Name</h2>
                            <div className="float-right">
                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                <h5 className="text-success"> 8 ratings</h5>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <p>registered at 12/7/1998</p>
                        <div className="categories">
                            <span class="badge badge-pill badge-primary p-2 mr-2">Primary</span>
                            <span class="badge badge-pill badge-primary p-2 mr-2">Primary</span>
                            <span class="badge badge-pill badge-primary p-2 mr-2">Primary</span>
                            <span class="badge badge-pill badge-primary p-2 mr-2">Primary</span>
                        </div>
                        <div className="footer w-100 mt-5">
                            <a href="#"  className="mt-3" data-toggle="modal" data-target="#rateStore">
                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faStar} className="mr-2 p-0 mt-1"></FontAwesomeIcon>
                                    <h5>Rate The Store Now!</h5>
                                </div>
                            </a>
                        </div>
                        {/*----------------------- Modal -------------------------*/}
                        <div class="modal fade" id="rateStore" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Rating</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div className="d-flex w-10 justify-content-center">
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                        {/*
                                        <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                        <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                        <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                        <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                        <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                        */}
                                    </div>
                                </div>
                                <div class="modal-footer text-center">
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="header">
                        <h3>Category Name</h3>
                    </div>
                    <div className="products">
                        <ProductCarousel />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="header">
                        <h3>Category Name</h3>
                    </div>
                    <div className="products">
                        <ProductCarousel />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
    }
}

export default StoreView;