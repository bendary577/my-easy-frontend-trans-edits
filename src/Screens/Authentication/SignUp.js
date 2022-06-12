import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { withRouter } from "react-router-dom";
//import {PhoneInput} from 'react-phone-number-input';
//import 'react-phone-number-input/style.css';
import "../../../public/css/signup.css";
import AuthService from "../../Services/AuthService";
import Signup from '../../../public/images/Authentication/signup.png';
import Recaptcha from "react-recaptcha";

const imageStyle = {
    width : "100%",
    height : 600
}

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        This is not a valid email.
      </div>
    );
  }
};


const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vphone = value => {
    if (value.length !== 11) {
      return (
        <div className="alert alert-danger mt-2" role="alert">
          Phone number must be 11 digits.
        </div>
      );
    }
  };


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      username : "",
      email: "",
      password: "",
      confirm_password : "",
      address : "",
      phone : "",
      birth_date : null,
      type : 1,
      zip_code : "",
      approval_files : [],
      gender : null,
      successful: false,
      message: "",
    };
  }

 vconfirmpassword = value => {
    if (value !== this.state.password) {
      return (
        <div className="alert alert-danger mt-2" role="alert">
          password confirmation is not identical.
        </div>
      );
    }
  };


  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onChangeConfirmPassword = (e) => {
    this.setState({
      confirm_password: e.target.value
    });
  }

  onChangePhone = (e) => {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeAddress = (e) => {
    this.setState({
      address: e.target.value
    });
  }

  onChangeBirthdate = (e) => {
    this.setState({
      birth_date: e.target.value
    });
  }

  onChangeZipCode = (e) => {
    this.setState({
      zip_code: e.target.value
    });
  }

  onChangeGender = (e) => {
    this.setState({
      gender : e.target.value
    });
  }

  onChangeFiles = (e) => {
    this.setState({
      approval_files : e.target.files
    });
  }

  handleRegister = async (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      let formData = new FormData();
      formData.append('name', this.state.name)
      formData.append('username', this.state.username)
      formData.append('email', this.state.email)
      formData.append('password', this.state.password)
      formData.append('phone_number', this.state.phone)
      formData.append('address', this.state.address)
      formData.append('zipcode', this.state.zip_code)
       
        if(this.state.approval_files.length !== 0){
            for (let i = 0; i < this.state.approval_files.length; i++) {
                formData.append(`approval_files_${i}`, this.state.approval_files[i])
            }
        }

        if(this.props.location.state.type === 'seller' || this.props.location.state.type === 'customer'){
          formData.append('birth_date', this.state.birth_date)
          formData.append('gender', this.state.gender)
        }

        if(this.props.location.state.type === 'customer'){
          formData.append('type', 1)
        }else if(this.props.location.state.type){
          formData.append('type', 2)
        }else{
          formData.append('type', 3)
        }

        this.setState({
          loading: true
        });
        let response = await  AuthService.register(formData);
        if(response.status === 200){
          this.setState({
            message: response.data,
            successful: true
          });
          this.props.history.push("/signin");
          window.location.reload();
        }else{
          const resMessage = response.data.message
          this.setState({
            loading: false,
            message: resMessage
          });
        }
    }
  }

  render() {
    const type =  this.props.location.state.type;
    return (
            <div className="signup ">
              <div className="container">
               <div className="row">
                   <div class="col-md-6">
                        <div className="auth-card card card-container">
                            <img
                            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                            alt="profile-img"
                            className="profile-img-card"
                            />
                
                            <Form
                            onSubmit={this.handleRegister}
                            ref={c => {
                                this.form = c;
                            }}
                            >
                            {!this.state.successful && (
                                
                                <div>
                                <label htmlFor="first_name">Name</label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="first_name"
                                                value={this.state.name}
                                                onChange={this.onChangeName}
                                                validations={[required]}
                                            />

                                <div className="form-group">
                                    <label htmlFor="email">Username</label>
                                    <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={this.state.onChangeUsername}
                                    onChange={this.onChangeUsername}
                                    validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    validations={[required, email]}
                                    />
                                </div>
                
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required, vpassword]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirm_password">Confirm Password</label>
                                    <Input
                                    type="password"
                                    className="form-control"
                                    name="confirm_password"
                                    value={this.state.confirm_password}
                                    onChange={this.onChangeConfirmPassword}
                                    validations={[required, this.vconfirmpassword]}
                                    />
                                </div>
                
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    {/* 
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        international
                                        defaultCountry="EG"
                                        value={this.state.phone}
                                        onChange={this.onChangePassword}/>
                                        -- */}
                                        <Input
                                            type="phone"
                                            className="form-control"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.onChangePhone}
                                            validations={[required, vphone]}
                                        />
                                </div>
                
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <Input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.onChangeAddress}
                                    validations={[required]}
                                    />
                                </div>

                                {
                                        /** ------------------------------ customer & seller birthdate ------------------------------ */
                                        ( (type === 'seller' || type=== 'customer') && 
                                          <div>
                                            <div className="form-group">
                                                <label htmlFor="birthdate">Birthdate</label>
                                                <Input
                                                  type="date"
                                                  className="form-control"
                                                  name="birthdate"
                                                  value={this.state.birth_date}
                                                  onChange={this.onChangeBirthdate}
                                                  validations={[required]}
                                                  />
                                            </div>

                                            <div className="my-3">
                                              <div className="form-check form-check-inline">
                                              <Input
                                                  id="male"
                                                  type="radio"
                                                  className="form-check-input"
                                                  name="male"
                                                  value="Male"
                                                  onChange={this.onChangeGender}
                                                  validations={[required]}
                                                  />
                                                <label className="form-check-label" for="male">Male</label>
                                              </div>

                                              <div className="form-check form-check-inline">
                                                <Input
                                                    id="female"
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="female"
                                                    value="Female"
                                                    onChange={this.onChangeGender}
                                                    validations={[required]}
                                                    />
                                                <label className="form-check-label" for="female">Female</label>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                  }

                                <div className="form-group">
                                    <label htmlFor="zip_code">Zip Code</label>
                                    <Input
                                    type="text"
                                    className="form-control"
                                    name="zip_code"
                                    value={this.state.zip_code}
                                    onChange={this.onChangeZipCode}
                                    validations={[required]}
                                    />
                                </div>

                                {
                                        /** ------------------------------ id user is individual seller ------------------------------ */
                                        (type === 'seller' && 
                                        <div className="form-group">
                                            <label htmlFor="national_identity">Approval Documents</label>
                                            <p className="text-danger text-small">please upload national identity card</p>
                                            <Input
                                            type="file"
                                            name="national_identity"
                                            onChange={this.onChangeFiles}
                                            validations={[required]}
                                            />
                                        </div>
                                        )
                                    }
                                    {
                                        
                                        (type === 'company' && 
                                        <div className="form-group">
                                            <label htmlFor="national_identity">Approval Documents</label>
                                            <p className="text-danger text-small">please upload a copy of the company Tax card and Commercial Record</p>
                                            <Input
                                            type="file"
                                            multiple 
                                            name="national_identity"
                                            validations={[required]}
                                            />
                                        </div>
                                        )
                                    }


                                <Recaptcha
                                  sitekey="6Lf0F7AbAAAAAKpiEmoBHnzDJjHhrOd_5a8EGipn"
                                />

                                <div className="form-group">
                                    <input type="submit" value="Sign Up" className="btn btn-primary btn-block" />
                                </div>

                                <div className="form-group text-center">
                                    <p>already have an account ?</p>
                                </div>

                                
                                <div className="form-group">
                                    <a href="/signin" className="btn btn-success btn-block">Sign In</a>
                                </div>

                                <div>
                                    <p>By clicking Register, you agree to our <a href="">Terms & Condtitions</a> and <a href="">Privacy Policy</a></p>
                                </div>
                                </div>
                            )}
                
                            {this.state.message && (
                                <div className="form-group">
                                <div
                                    className={
                                    this.state.successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {this.state.message}
                                </div>
                                </div>
                            )}
                            <CheckButton
                                style={{ display: "none" }}
                                ref={c => {
                                this.checkBtn = c;
                                }}
                            />
                            </Form>
                        </div>
                   </div>
                   <div class="col-md-6 justify-content-center bg-light">
                       <div className="container">
                            <div className="row">
                                <div className="title my-4">
                                    <h1><strong>MyEasy Registeration</strong></h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="info mt-2">
                                    <h3>Please Note That</h3>
                                    <div className="alert alert-success">
                                        after registeration, your account will be susbended waiting approval by our system, 
                                        after checking your info you will be send an activation mail that you can login with
                                    </div>
                                </div>
                                <div className="instructions mt-2">
                                   <ul>
                                       <li className="text-danger"><strong>please make sure your data is correct</strong></li>
                                       <li className="text-danger"><strong>provide all your personal cards for your safety</strong></li>
                                       <li className="text-danger"><strong>your personal info is safe and no one can access it</strong></li>
                                   </ul>
                                </div>
                            </div>
                            <div className="">
                                <img src={Signup} style={imageStyle} className="" alt="register" />
                            </div>
                       </div>
                   </div>
             </div>
             </div>
       </div>
      );
    

  }
}

export default withRouter(SignUp);