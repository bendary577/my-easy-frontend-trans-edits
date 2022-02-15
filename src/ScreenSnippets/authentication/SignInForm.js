import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faGoogle,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import ".././../../public/css/signin.css";

class SignInFrom extends Component {

    state = {
        email: '',
        password:''
      };
    
      handleChange = event => {
        this.setState({ email: event.target.value,
                        password: event.target.value });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
              .then(res => {
                    console.log(res);
                    console.log(res.data);
      })
    }

    render() {
        return (
            <div className="loginDiv">
                <div className="login d-flex justify-content-center align-items-center my-5">
                    <div className="card loginCard w-75 mt-5"> 
                       {/*--------------------- card body ------------------------------------------------ */}

                        <div className="card-body mt-5">
                            <form className="needs-validation" method="post" onSubmit={this.handleSubmit} noValidate>
                                {/*--------------------email, password  ----------------------------------------- */}

                                <div className="form-group">
                                    <label className="font-weight-bold">Email:*</label>
                                    <input
                                        type="eamil"
                                        placeholder="email"
                                        className="form-control"
                                        name="email"
                                        maxLength="100"
                                        required
                                        onChange={this.handleChange}
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid email.
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="font-weight-bold">Password:*</label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="form-control"
                                        name="password"
                                        maxLength="30"
                                        required
                                        onChange={this.handleChange}
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid password.
                                    </div>
                                </div>

                                {/*---------------------remember & forgot password  ----------------------------------------- */}

                                <div className="d-flex justify-content-end">
                                    <div>
                                        <div className="form-group">
                                            <p>
                                                <b>
                                                    <u>
                                                        <Link to="/ForgotPassword">
                                                            forgot my password
                                                        </Link>
                                                    </u>
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox1"
                                            value="option1"
                                        ></input>
                                        <label
                                            className="form-check-label"
                                            for="inlineCheckbox1"
                                        >
                                            remember me
                                        </label>
                                    </div>
                                </div>
                                
                                {/*---------------------login button ----------------------------------------- */}

                                <div className="form-group mt-4">
                                    <a href="/profile" className="btn btn-dark btn-block">login</a>
                                </div>

                                {/*--------------------- or register section ----------------------------------------- */}

                                <div className="form-group">
                                    <div className="text-center">
                                        <p>
                                            {" "}
                                            Not a member?{" "}
                                            <b>
                                                <Link to="/registeras">
                                                    Register
                                                </Link>
                                            </b>{" "}
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <p> or login with </p>
                                    </div>

                                    <div className="form-row d-flex align-items-center justify-content-center">
                                        <a
                                            type="button"
                                            className="btn-floating btn-lg"
                                        >
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                />
                                            </i>
                                        </a>

                                        <a
                                            type="button"
                                            className="btn-floating btn-lg"
                                        >
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faGoogle}
                                                />
                                            </i>
                                        </a>

                                        <a
                                            type="button"
                                            className="btn-floating btn-lg"
                                        >
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faTwitter}
                                                />
                                            </i>
                                        </a>

                                        <a
                                            type="button"
                                            className="btn-floating btn-lg"
                                        >
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faLinkedin}
                                                />
                                            </i>
                                        </a>
                                    </div>
                                </div>

                                {/*--------------------- end form ----------------------------------------- */}
                            </form>
                        </div>
                    </div>

                    {/*--------------------- end card ----------------------------------------- */}
                </div>
            </div>

        );
    }
}

export default SignInFrom;
