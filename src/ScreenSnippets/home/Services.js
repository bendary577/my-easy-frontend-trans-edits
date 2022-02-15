import React, { Component } from "react";
import statistics from "../../../public/icons/home/statistics.png";
import shop from "../../../public/icons/home/shop.png"
import customerService from "../../../public/icons/home/customer-service.png";
import shopping from "../../../public/icons/home/online-shopping.png";
import time from "../../../public/icons/home/time.png";
import bill from "../../../public/icons/home/bill.png";
import { withTranslation } from 'react-i18next';
import '../../../public/css/services_section.css';

class Services extends Component {
    render() {
        const { t } = this.props;
        return (
            <section className="services" id="services">
                <div className="container mt-5">
                    <div className="text-center">
                        <h2 className="mb-3">{t(`home.services.services_we_offer`)}</h2>
                        <p className="mb-5">{t(`home.services.services_description`)}</p>
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInLeft">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={statistics} alt="" /> 
                                    <h4 className="service__title">{t(`home.services.grwoing_business`)}</h4>
                                    <p className="service__paragraph">
                                    {t(`home.services.grwoing_business_description`)}</p>
                                </div>
                            </div>

                            {/* -------------------------------- save time ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInDown">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={time} alt="" />
                                    <h4 className="service__title">{t(`home.services.save_time`)}</h4>
                                    <p className="service__paragraph">
                                    {t(`home.services.save_time_description`)}</p>
                                </div>
                            </div>

                            {/* -------------------------------- customer support ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInRight">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={customerService} alt="" />
                                    <h4 className="service__title">{t(`home.services.customer_support`)}</h4>
                                    <p className="service__paragraph">
                                    {t(`home.services.customer_support_description`)}</p>
                                </div>
                            </div>

                            {/* -------------------------------- make invoice ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInLeft">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={bill} alt="" />
                                    <h4 className="service__title">{t(`home.services.make_invoice`)}</h4>
                                    <p className="service__paragraph" >
                                    {t(`home.services.make_invoice_description`)}</p>
                                </div>
                            </div>

                            {/* -------------------------------- vreate market ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInUp">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={shop} alt="" />
                                    <h4 className="service__title">{t(`home.services.make_your_market`)}</h4>
                                    <p className="service__paragraph">
                                    {t(`home.services.make_your_market_description`)}</p>
                                </div>
                            </div>

                            {/* -------------------------------- make shopping ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInRight">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={shopping} alt="" />
                                    <h4 className="service__title">{t(`home.services.make_shopping`)}</h4>
                                    <p className="service__paragraph">
                                    {t(`home.services.make_shopping_description`)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTranslation()(Services);