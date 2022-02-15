

import React, { Component } from "react";
import "../../public/css/signupas.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import {MdSecurity} from "@fortawesome/fontawesome-svg-core";
import { withTranslation } from 'react-i18next';


class PaymentForm extends Component {
    render() {
        const {t}=this.props;
        return (

                  <div className="payment-form mb-5 p-5 bg-light">
                  <form className="">

                      <div className="clearfix mb-3">
                          <h4 className="float-left">{t(`home.PaymentForm.payment`)}</h4>
                          <div className="float-right">
                               <FontAwesomeIcon icon={faCcVisa} className="fa-2x visa"></FontAwesomeIcon>                 
                               <FontAwesomeIcon icon={faCcMastercard} className="ml-2 fa-2x master"></FontAwesomeIcon>
                          </div>
                      </div>
                      
                      <div className="form-group">
                          <label for="cardname">{t(`home.PaymentForm.card_name`)}</label>
                          <input type="text" className="form-control" placeholder="card name" name="card-name" />
                      </div>

                      <div className="form-group">
                          <label for="cardnumber">{t(`home.PaymentForm.card_num`)}</label>
                          <input type="text" className="form-control" placeholder="card number" id="cardnumber" name="card-number" />
                      </div>

                      <div className="form-group my-3">
                          <label for="card-security">{t(`home.PaymentForm.currency`)}</label>
                          <select class="custom-select">
                            <option selected>{t(`home.PaymentForm.select_currency`)}</option>
                            <option value="1">{t(`home.PaymentForm.rg`)}</option>
                            <option value="2">{t(`home.PaymentForm.dollar`)}</option>
                        </select>
                      </div>

                      {/* --------------------------- card date ------------------------------------- */}

                      <div className="form-row">
                          <div className="col-sm-6">
                              <label for="card-date">{t(`home.PaymentForm.expire_date`)}</label>
                              <div className="form-inline">  
                                  <select
                                      name="month"
                                      className="form-control browser-default custom-select"
                                      id="card-date"
                                      required
                                  >
                                      <option value="" disabled>
                                          {" "}
                                          {t(`home.PaymentForm.month`)}{" "}
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
                                          {t(`home.PaymentForm.year`)}{" "}
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
                              <label for="card-security">{t(`home.PaymentForm.sec_code`)}</label>
                              <FontAwesomeIcon icon={MdSecurity} className="fa-lg"></FontAwesomeIcon>
                              <input type="text" id="card-security" name="card-security" />
                          </div>
                      </div>

                      {/*------------------ save card info ----------------------------------------*/}

                      <div className="form-group mt-3">
                          <input type="checkbox" id="card" name="save-card" />
                          <label for="card" className="ml-2">{t(`home.PaymentForm.card_info`)}</label>
                      </div>

                      {/*------------------ for your safety ----------------------------------------*/}

                      <div className="">
                          <h4>{t(`home.PaymentForm.safety`)}</h4>
                          <ul>
                              <li><h6>{t(`home.PaymentForm.safety_1`)}</h6></li>
                              <li><h6>{t(`home.PaymentForm.safety_2`)}</h6></li>
                              <li><h6>{t(`home.PaymentForm.safety_3`)}</h6></li>
                          </ul>
                      </div>

                      {/*------------------ submit button ----------------------------------------*/}

                      <div className="mt-4">
                          <button className="btn btn-lg btn-success">{t(`home.PaymentForm.complete`)}</button>
                      </div>
                  </form>
              </div>
            );
        }
    }

export default withTranslation()(PaymentForm);
