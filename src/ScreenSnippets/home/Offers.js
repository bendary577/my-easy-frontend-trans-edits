import React , {Component} from 'react';
import app4 from "../../../public/images/Home/app4.png";
import app5 from "../../../public/images/Home/app5.png";
import { withTranslation } from 'react-i18next';

class Offers extends Component {
    render(){
    const {t}=this.props;
        const imageStyle={
            width:400,
            height:400
        }

        return (
            <div className="offers" id="offers">
                <div className="container my-5">
                        <div className="">
                            <div className="text-center">
                                <h2 className="mb-4">{t(`home.offers.what_we_offer`)}</h2>
                                <p className="mb-5"> </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-lg-6">
                                <img src={app4} style={imageStyle} alt="" />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <h3 className="mb-4">{t(`home.offers.first_section_title`)}</h3>
                                <p className="mb-4">{t(`home.offers.first_section_description_1`)}</p>
                                <p className="mb-4">{t(`home.offers.first_section_description_2`)}</p>
                            </div>
                        </div>
                        
                        {/**--------------------------------------second row---------------------------------------------- */}
                        <div className="row mt-5">
                            <div className="col-xs-12 col-lg-6">
                                <h3 className="mb-4">{t(`home.offers.second_section_title`)}</h3>
                                <p className="mb-4">{t(`home.offers.second_section_description_1`)}</p>
                                <p className="mb-4">{t(`home.offers.second_section_description_1`)}</p>
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <img src={app5} style={imageStyle} alt="" />
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default withTranslation() (Offers);