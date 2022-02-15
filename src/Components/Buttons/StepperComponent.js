import React, { Component } from "react";
import { Stepper, Step } from 'react-form-stepper';

class StepperComponent extends Component {

    render() {


        return (    
                 
            <div className="app"> 
                <div class="row">
                    <Stepper className="w-100"  activeStep={this.props.activeStep}>
                        <Step label="Phone Verification"  onClick={()=>{this.props.setCurrentStep(0)}} active={this.props.activeStep === 0} />
                        <Step label="Withdrawal Type" onClick={()=>{this.props.setCurrentStep(1)}} active={this.props.activeStep === 1} />
                        <Step label="Bank Details" onClick={()=>{this.props.setCurrentStep(2)}} active={this.props.activeStep === 2} />
                    </Stepper>
                </div>
            </div>


        );
    }
}

export default StepperComponent;
