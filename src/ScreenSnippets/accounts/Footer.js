
import React, { Component } from "react";
import Facebook from "../../../public/icons/social media/facebook.png";
import Instagram from "../../../public/icons/social media/instagram.png";
import Twitter from "../../../public/icons/social media/twitter.png";
import Pinterest from "../../../public/icons/social media/pinterest.png";
import GooglePlus from "../../../public/icons/social media/google-plus.png";
import PlayStore from "../../../public/icons/social media/playstore.png";
import { withTranslation } from "react-i18next";
import GeneralService from "../../Services/GeneralService";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          categories : [], 
          loading : false,
          message : "",
          successful : false
        };
      }

    componentDidMount = ()=>{
        this.getCategories();
    }

    getCategories = async () => {
        this.setState({
            loading: true
          });
        let response = await  GeneralService.getCategoriesNames();
        if(response.status === 200){
            this.setState({
              message: response.data,
              successful: true
            });
        }else{
            const resMessage = response.data.message
            this.setState({
              loading: false,
              message: resMessage
            });
        }
    }

    render() {

        const {t} = this.props;

        const socialMediaIconsStyle = {
            width : 30,
            height : 30
        };
        
        return (
            <div className="">
                <div className="footer" style={{backgroundColor:"lightgray"}}>
                    <div className="container pb-5">
                        <div className="page-section">
                            <div className="row gutters-100">
                                {/* ------------------------------ products categories -------------------------------------- */}
                                <div className="col-md-4 col-lg-3">
                                    <div className="footer__first">
                                        <h2 className="footer__title text-dark">{t(`home.footer.products`)}</h2>
                                            {
                                                this.state.categories.length === 0 ?
                                                <p>
                                                    {this.state.message}
                                                </p>
                                                :
                                                <ul className="footer-first__social-icons">
                                                {
                                                    this.state.categories.map((category)=>{
                                                        <li><a href="" className="text-dark">{category}</a></li>
                                                    })
                                                }
                                                </ul> 
                                            }
                                    </div>
                                </div>

                                {/* ------------------------------ quick link -------------------------------------- */}

                                <div className="col-md-6 col-lg-2">
                                    <div className="footer__second">
                                        <h2 className="footer__title text-dark">{t(`home.footer.quick`)}</h2>
                                        <ul>
                                            <li><a href="" className="text-dark">{t(`home.footer.home`)}</a></li>
                                            <li><a href="" className="text-dark">{t(`home.footer.aboutus`)}</a></li>
                                            <li><a href="" className="text-dark">{t(`home.footer.service`)}</a></li>
                                            <li><a href="" className="text-dark">{t(`home.footer.blog`)}</a></li>
                                            <li><a href="" className="text-dark">{t(`home.footer.contact`)}</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* ------------------------------ contact us -------------------------------------- */}

                                <div className="col-md-6 col-lg-3">
                                    <div className="footer__third">
                                        <h2 className="footer__title text-dark">{t(`home.footer.contact`)}</h2>
                                        <ul>
                                            <li><span className="glyphicon glyphicon-envelope "></span> <a href="#" className="text-dark">{t(`home.footer.email`)}</a></li>
                                            <li><span className="glyphicon glyphicon-earphone"></span> <a href="#" className="text-dark">{t(`home.footer.first_phone`)}</a></li>
                                            <li><span className="glyphicon glyphicon-earphone"></span> <a href="#" className="text-dark">{t(`home.footer.second_phone`)}</a></li>
                                        </ul>
                                        <h4 className="footer__subscribe__title text-dark">{t(`home.footer.subscribe`)}</h4>
                                        <div className="subscribe-section">
                                            <input type="email" className="form-control" size="50" placeholder={t(`home.footer.enteremail`)} required />
                                            <button className="subscribe-section__button" type="button"><img src="../images/send-icon.png" alt="" /></button>
                                        </div>
                                    </div>
                                </div>

                                {/* ------------------------------ social media -------------------------------------- */}

                                <div className="col-md-6 col-lg-4">
                                    <div className="footer__fourth">
                                        <h4 className="footer__title text-dark">{t(`home.footer.follow`)}</h4>
                                        <div className="icons">
                                            <ul>
                                                <li><a href=""><img src={Facebook} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                                <li><a href=""><img src={Instagram} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                                <li><a href=""><img src={Twitter} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                                <li><a href=""><img src={Pinterest} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                                <li><a href=""><img src={GooglePlus} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer__fourth">
                                        <h4 className="footer__title text-dark">{t(`home.footer.download`)}</h4>
                                        <img src={PlayStore} style={socialMediaIconsStyle} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="bg-dark" style={{height:80}}>
                    <p className="footer__bottom-paragraph text-white">
                    {t(`home.footer.copy`)}
                        <a href="" style={{ color: "#00aafe", fontWeight: "bold" }}> MyEasy </a>
                        {t(`home.footer.right`)}
                    </p>
                </div>
            </div>
        )
    }
}

export default withTranslation() (Footer);