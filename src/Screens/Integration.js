import React, {  } from "react";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const Integartion = () => {

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
                                    <h2 className="font-weight-bold">Integration Settings</h2>
                                </div>

                                <div className="content">
                                    <h5>API Key</h5>
                                    <div className="my-2">
                                        <textarea id="token" name="token" rows="4" cols="50" placeholder="token (optional)" style={{width : "100%"}}>
        
                                        </textarea>
                                    </div>
                                    <button className="btn btn-primary btn-block">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            <Footer/>
        </div>
            

        );
    }

export default Integartion;
