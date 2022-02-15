/*
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



class Signup extends Component {

    state = {
        firstname:'',

        secondname: '',
        email: '',
        password:'',
        confirmpassword:'',
        phonenumber: '',
        birthday: '',
        specialization: '',
        address: '',
        province: '',
        city:'',
        zipcode:'',
        gender:''
      };

      handleChange = event => {
        this.setState({ firstname : event.target.value,
                        secondname : event.target.value,
                        email : event.target.value,
                        password : event.target.value,
                        confirmpassword : event.target.value,
                        phonenumber : event.target.value,
                        birthday : event.target.value,
                        specialization : event.target.value,
                        address : event.target.value,
                        province: event.target.value,
                        city: event.target.value,
                        zipcode: event.target.value,
                        gender: event.target.value,  
                     });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const user = {
            firstname : this.state.firstname,
            secondname : this.state.secondname,
            email : this.state.email,
            password : this.state.password,
            confirmpassword : this.state.confirmpassword,
            phonenumber : this.state.phonenumber,
            birthday : this.state.birthday,
            specialization: this.state.specialization,
            address: this.state.address,
            province: this.state.province,
            city: this.state.city,
            zipcode: this.state.zipcode,
            gender: this.state.gender
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
              .then(res => {
                    console.log(res);
                    console.log(res.data);
      })
    }

    render() {
        return (
            <div className="signupDiv">
                <div className="signup d-flex justify-content-center align-items-center my-5">
                    <div className="card signupCard w-50 mt-5">

        --------------------- card body ------------------------------------------------ 

                        <div className="card-body">
                            <form
                                className="needs-validation"
                                method="post"
                                novalidate
                            >
                                {/*---------------------name ------------------------------------------------ 

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="validationfirstname">First name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationfirstname"
                                            name="firstname"
                                            maxLength="25"
                                            autofocus
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a valid name.
                                        </div>
                                        <div class="valid-feedback">
                                            that's a valid name!
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="validationsecondname">Second name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationsecondname"
                                            name="secondname"
                                            maxLength="25"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a valid name.
                                        </div>
                                        <div class="valid-feedback">
                                            that's a valid name!
                                        </div>
                                    </div>
                                </div>

                                {/*--------------------email, password, phone ----------------------------------------- 

                                <div className="form-group">
                                    <label for="validationemail">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="validationemail"
                                        name="email"
                                        maxLength="100"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid email.
                                    </div>
                                    <div class="valid-feedback">
                                            that's a valid email!
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="validationpassword">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="validationpassword"
                                        name="password"
                                        maxLength="30"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid password.
                                    </div>
                                    <div class="valid-feedback">
                                        that's a valid password!
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="validationconfirmpassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="validationconfirmpassword"
                                        name="password"
                                        maxLength="30"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        passwords don't match!.
                                    </div>
                                    <div class="valid-feedback">
                                        passwords match!
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="validationphonenumber">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationphonenumber"
                                        name="phone"
                                        maxLength="11"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid phone number.
                                    </div>
                                    <div class="valid-feedback">
                                            that's a valid number!
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="validationbirthdate">Birthdate</label>
                                    <input type="date"  className="form-control" id="validationbirthdate" name="birthday" />
                                    <div className="invalid-feedback">
                                        Please enter a valid bithdate.
                                    </div>
                                    <div class="valid-feedback">
                                        good!
                                    </div>
                                </div>  

                                {/*--------------------- specialization ----------------------------------------------- 
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="validationspecialization">Specialization</label>
                                        <select
                                            name="specialization"
                                            className="form-control browser-default custom-select"
                                            id="validationspecialization"
                                            required
                                        >
                                            <option value="" disabled>
                                                {" "}
                                                specialization{" "}
                                            </option>
                                            <option value="1" selected>
                                                {" "}
                                                Electronic Devices{" "}
                                            </option>
                                            <option value="2"> Electronic Devices </option>
                                            <option value="3"> Electronic Devices </option>
                                            <option value="4"> Electronic Devices </option>
                                            <option value="5"> Electronic Devices </option>
                                            <option value="6"> Electronic Devices </option>
                                            <option value="7"> Electronic Devices </option>
                                            <option value="8"> Electronic Devices </option>
                                            <option value="9"> Electronic Devices </option>
                                            <option value="10"> Electronic Devices </option>
                                            <option value="11"> Electronic Devices </option>
                                            <option value="12"> Electronic Devices </option>
                                            <option value="13"> Electronic Devices </option>
                                            <option value="14"> Electronic Devices </option>
                                            <option value="15"> Electronic Devices </option>
                                            <option value="16"> Electronic Devices </option>
                                            <option value="17"> Electronic Devices </option>
                                            <option value="18"> Electronic Devices </option>
                                            <option value="19"> Electronic Devices </option>
                                            <option value="20"> Electronic Devices </option>
                                        </select>
                                    </div>
                                </div>

                                {/*---------------------address ----------------------------------------------- 

                                <div className="form-group">
                                    <label for="validationaddress">Address</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="validationaddress"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid address.
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="validationprovince">Province</label>
                                        <select
                                            name="province"
                                            className="form-control browser-default custom-select"
                                            id="validationprovince"
                                            required
                                        >
                                            <option value="" disabled>
                                                {" "}
                                                province{" "}
                                            </option>
                                            <option value="1" selected>
                                                {" "}
                                                Cairo{" "}
                                            </option>
                                            <option value="2"> Cairo </option>
                                            <option value="3"> Cairo </option>
                                            <option value="4"> Cairo </option>
                                            <option value="5"> Cairo </option>
                                            <option value="6"> Cairo </option>
                                            <option value="7"> Cairo </option>
                                            <option value="8"> Cairo </option>
                                            <option value="9"> Cairo </option>
                                            <option value="10"> Cairo </option>
                                            <option value="11"> Cairo </option>
                                            <option value="12"> Cairo </option>
                                            <option value="13"> Cairo </option>
                                            <option value="14"> Cairo </option>
                                            <option value="15"> Cairo </option>
                                            <option value="16"> Cairo </option>
                                            <option value="17"> Cairo </option>
                                            <option value="18"> Cairo </option>
                                            <option value="19"> Cairo </option>
                                            <option value="20"> Cairo </option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label for="validationcity">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationcity"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a city.
                                        </div>
                                        <div className="valid-feedback">
                                            good!
                                        </div>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label for="validationzipcode">Zip Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationzipcode"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a zip code.
                                        </div>
                                    </div>
                                </div>

                                {/*---------------------radio button ----------------------------------------- 

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input "
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                        checked
                                    ></input>
                                    <label
                                        className="form-check-label"
                                        for="male"
                                    >
                                        Male
                                    </label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                    ></input>
                                    <label
                                        className="form-check-label"
                                        for="female"
                                    >
                                        Female
                                    </label>
                                </div>

                                {/*---------------------submit button ----------------------------------------- 

                                <div className="form-group mt-4">
                                    <a href="/profile" className="btn btn-dark btn-block">submit</a>
                                </div>

                                {/*---------------------login text ----------------------------------------- 

                                <div className="text-center">
                                    <p>
                                        {" "}
                                        already have an account ?{" "}
                                        <b>
                                            <u>
                                                <Link to="/signin">log in</Link>
                                            </u>
                                        </b>
                                    </p>
                                </div>

                                <div className="text-center">
                                    <p>
                                        {" "}
                                        By clicking Register I agree to our{" "}
                                        <Link to="/termsofservice">
                                            terms of service 
                                        </Link>
                                        {" "} and {" "} 
                                        <Link to="/privacypolicy">
                                            privacy policy
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
*/

import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { withRouter } from "react-router-dom";
//import {PhoneInput} from 'react-phone-number-input';
//import 'react-phone-number-input/style.css';
import "../../public/css/signup.css";
import AuthService from "../Services/AuthService";
import Signup from '../../public/images/Authentication/signup.png';
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
      first_name : "",
      second_name : "",
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

  onChangeFirstName = (e) => {
    this.setState({
      first_name: e.target.value
    });
  }

  onChangeSecondName = (e) => {
    this.setState({
      second_name: e.target.value
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

  handleRegister = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
        let data = {
           first_name : this.state.first_name,
           second_name : this.state.second_name,
           email: this.state.email,
           password: this.state.password,
           phone_number : this.state.phone,
           address: this.state.address,
           zipcode: this.state.zip_code,
        }

        if(this.state.approval_files.length !== 0){
            let formData = new FormData();
            for (let i = 0; i < this.state.approval_files.length; i++) {
                formData.append(`approval_files[${i}]`, this.state.approval_files[i])
            }
            data.approval_files = formData;
        }

        if(this.props.location.state.type === 'seller' || this.props.location.state.type === 'customer'){
          data.birth_date = this.state.birth_date;
          data.gender = this.state.gender;
        }

        this.props.location.state.type === 'customer' ? data.type = 1 : this.props.location.state.type === 'seller' ? data.type = 2 : data.type = 3;

        console.log(
          data.birth_date + " " +
          data.password + " " + 
          data.gender + " " + 
          data.type
        )
      AuthService.register(data).then(
        response => {
          console.log("^^^^^^^^^^^^^^^^^^^^^^ success")
          if(response.status === 200 || response.status === 201){
            console.log("^^^^^^^^^^^^^^^^^^^^^^ success 2")
            this.setState({
              message: response.data,
              successful: true
            });
            this.props.history.push("/signin");
            window.location.reload();
          }
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
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
                
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="first_name">First Name</label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="first_name"
                                                value={this.state.first_name}
                                                onChange={this.onChangeFirstName}
                                                validations={[required]}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="second_name">Second Name</label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="second_name"
                                                value={this.state.second_name}
                                                onChange={this.onChangeSecondName}
                                                validations={[required]}
                                            />
                                        </div>
                                    </div>
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