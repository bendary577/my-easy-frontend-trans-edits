import React, { Component } from 'react';
import visaPayment from "../../../public/images/Home/visa-payment.jpg";
import Discussion from "../../../public/images/Home/about-pic.png";
import { withTranslation } from 'react-i18next';

class About extends Component {
    render() {
        const { t } = this.props;
        return (
            <section className="about" id="about">
                <div className="container mt-5 mb-5">
                    <div className="">
                        <div className="text-center">
                            <h2 className="mb-4">{t(`home.about.about_my_easy`)}</h2>
                            <p className="mb-5">{t(`home.about.about_my_easy_description`)}</p>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-lg-6">
                                <img className="w-100 h-100" src={Discussion} alt="" />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <h3 className="mb-4">{t(`home.about.first_section_title`)}</h3>
                                <p className="mb-4">{t(`home.about.first_section_description_1`)}</p>
                                <p className="mb-4">{t(`home.about.first_section_description_2`)}</p>
                                <a className="btn btn-dark" href="" style={{
                                    width: '30%', borderRadius: '30px'
                                }}>{t(`home.about.read_more`)}</a>
                            </div>
                        </div>
                            {/** ------------------------------------second photo----------------------------------------- */}
                        <div className="row my-5">
                            <div className="col-xs-12 col-lg-6">
                                    <h3 className="mb-4">{t(`home.about.second_section_title`)}</h3>
                                    <p className="mb-4">{t(`home.about.second_section_description_1`)}</p>
                                    <p className="mb-4">{t(`home.about.second_section_description_2`)}</p>
                                    <a className="btn btn-dark" href="" style={{
                                        width: '30%', borderRadius: '30px', marginBottom : '20px'
                                    }}>{t(`home.about.read_more`)}</a>
                                </div>
                            <div className="col-xs-12 col-lg-6">
                                <img className="w-100 h-100" src={visaPayment} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default withTranslation()(About);
