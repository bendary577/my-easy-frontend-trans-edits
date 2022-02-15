import React, { useState } from "react";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import StepperComponent from '../Components/Buttons/StepperComponent';
import PhoneVerificationCard from "../Components/Cards/PhoneVerificationCard";
import WithdrawalTypeCard from "../Components/Cards/WithdrawalTypeCard";
import BankDetailsCard from "../Components/Cards/BankDetailsCard";

const WithdrawMoney = () => {

        const [step, setStep] = useState(0);

        const setCurrentStep = (value) => {
            setStep(value);
        }

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
                                    <h2 className="font-weight-bold">Withdraw Money</h2>
                                </div>

                                <div className="content">
                                    <div className="stepper">
                                        <StepperComponent setCurrentStep={setCurrentStep} activeStep={step}/>
                                    </div>
                                    <div className="action">
                                        {
                                            step === 0 ?
                                            <PhoneVerificationCard setCurrentStep={setCurrentStep} />
                                            :

                                            step === 1 ? 

                                            <WithdrawalTypeCard setCurrentStep={setCurrentStep} />
                                            :

                                            <BankDetailsCard />
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>  
                </div>
            <Footer/>
        </div>
            

        );
    }

export default WithdrawMoney;
