import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import person_2 from '../../../public/images/person_2.jpg';
import { withTranslation } from "react-i18next";


class AccountInfoSection extends Component {

    render() {
    const {t}=this.props;
        const avatarStyle = {
            width : "80%",
            height : "80"
        };

        return (
            <div>
                {/**------------------------------------- account intro row ---------------------------------- */}

                <div className="row">
                                <div className="intro-headline d-flex my-5 ml-4">
                                    <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                    <h2 className="font-weight-bold">{t(`home.AccountInfoSection.welcome`)}</h2>
                                </div>
                            </div>

                         {/**------------------------------------- account info row ---------------------------------- */}

                            <div className="acount info mb-5">
                                <div className="continer">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={person_2} style={avatarStyle} className="rounded" alt="avatar" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="info border rounded h-100 p-5">
                                                <h2>{this.props.user.first_name}</h2>
                                                <p>
                                                    {
                                                        this.props.user.profile_type === "App\\Models\\AdminProfile" ? "Admin" : 
                                                        this.props.user.profile_type === "App\\Models\\SellerProfile" ? " Seller" : "Company"
                                                    }
                                                </p>
                                                {/* <p>registered at {this.props.user.created_at.slice(0,10)}</p> */}
                                                <div className="about">
                                                    <h4>{this.props.user.bio}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>

        );
    }
}

export default withTranslation()(AccountInfoSection);
