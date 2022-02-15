import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import {MdSecurity} from "@fortawesome/fontawesome-svg-core";
import AuthService from "../Services/AuthService";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class PayInvoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="">
        <div className="auth-card card card-container">
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >

            <div className="form-group">
              <h1>Invoice Information</h1>
              <div className="">
              <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Seller Name</th>
                        <th scope="col">Product</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mohamed Ali</td>
                            <td>Televison</td>
                            <td>3 Pieces</td>
                            <td>15000</td>
                            <td>45000</td>
                        </tr>
                    </tbody>
                    </table>
              </div>
            </div>

            <div className="form-group">
              <h1>Payment Information</h1>
              
            </div>

            <div className="payment-form mb-5 p-5 bg-light">
                  <form className="">

                      <div className="clearfix mb-3">
                          <h4 className="float-left">New Payment Card</h4>
                          <div className="float-right">
                               <FontAwesomeIcon icon={faCcVisa} className="fa-2x visa"></FontAwesomeIcon>                 
                               <FontAwesomeIcon icon={faCcMastercard} className="ml-2 fa-2x master"></FontAwesomeIcon>
                          </div>
                      </div>
                      
                      <div className="form-group">
                          <label for="cardname">Name on Card</label>
                          <input type="text" className="form-control" placeholder="card name" name="card-name" />
                      </div>

                      <div className="form-group">
                          <label for="cardnumber">Card Number</label>
                          <input type="text" className="form-control" placeholder="card number" id="cardnumber" name="card-number" />
                      </div>


                      {/* --------------------------- card date ------------------------------------- */}

                      <div className="form-row">
                          <div className="col-sm-6">
                              <label for="card-date">Expiration Date</label>
                              <div className="form-inline">  
                                  <select
                                      name="month"
                                      className="form-control browser-default custom-select"
                                      id="card-date"
                                      required
                                  >
                                      <option value="" disabled>
                                          {" "}
                                          Month{" "}
                                      </option>
                                      <option value="1" selected>
                                          {" "}
                                          01{" "}
                                      </option>
                                      <option value="2"> 02 </option>
                                      <option value="3"> 03 </option>
                                      <option value="4"> 04 </option>
                                      <option value="5"> 05 </option>
                                      <option value="6"> 06 </option>
                                      <option value="7"> 07 </option>
                                      <option value="8"> 08 </option>
                                      <option value="9"> 09 </option>
                                      <option value="10"> 10 </option>
                                      <option value="11"> 11 </option>
                                      <option value="12"> 12 </option>
                                  </select>

                                  <select
                                      name="month"
                                      className="form-control browser-default custom-select ml-3"
                                      required
                                   >
                                      <option value="" disabled>
                                          {" "}
                                          Year{" "}
                                      </option>
                                      <option value="1" selected>
                                      {" "}
                                          2021{" "}
                                      </option>
                                      <option value="2"> 2022 </option>
                                      <option value="3"> 2023 </option>
                                      <option value="4"> 2024 </option>
                                      <option value="5"> 2025 </option>
                                      <option value="6"> 2026 </option>
                                      <option value="7"> 2027 </option>
                                      <option value="8"> 2028 </option>
                                      <option value="9"> 2029 </option>
                                      <option value="10"> 2030 </option>
                                      <option value="11"> 2031 </option>
                                      <option value="12"> 2032 </option>
                                      <option value="13"> 2022 </option>
                                      <option value="14"> 2034 </option>
                                      <option value="15"> 2035 </option>
                                      <option value="16"> 2036 </option>
                                      <option value="17"> 2037 </option>
                                      <option value="18"> 2038 </option>
                                      <option value="19"> 2039 </option>
                                   </select>
                              </div>
                              
                          </div>

                      {/*------------------card security ----------------------------------------*/}

                          <div className="col-sm-6 mt-2">
                              <label for="card-security">Security Code</label>
                              <FontAwesomeIcon icon={MdSecurity} className="fa-lg"></FontAwesomeIcon>
                              <input type="text" id="card-security" name="card-security" />
                          </div>
                      </div>

                      <div className="form-group my-3">
                          <label for="card-security">Currency</label>
                          <select class="custom-select">
                            <option selected>select currency</option>
                            <option value="1">EGP</option>
                            <option value="2">Dollar</option>
                        </select>
                      </div>
                  </form>
              </div>

            <div className="form-group">
              <button
                className="btn btn-success btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Complete Payment</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
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
    );
  }
}

