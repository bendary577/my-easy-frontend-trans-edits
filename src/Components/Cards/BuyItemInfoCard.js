import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import product from "../../../public/images/Products/shoes.jpg";
import { withTranslation } from 'react-i18next';

class BuyItemInfoCard extends Component {
    render() {
        const{t}=this.props;

        const ImgsStyle = {
            height: 300
        };


        return (
            <div className="card mb-5">
                <img className="card-img-top w-100" alt="" src={product} style={ImgsStyle} />
                <div className="card-body bg-light">
                    <h3 className="card-title">{t(`home.BuyItemInfoCard.summary`)}</h3>
                    <div className="name clearfix">
                        <p className="card-text float-left">{t(`home.BuyItemInfoCard.item_name`)}</p>
                        <div className="float-right">
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStarHalf} className="checked"></FontAwesomeIcon>
                        </div>
                    </div>

                    <p className="card-text">{t(`home.BuyItemInfoCard.item_info_text`)}</p>

                    <div className="price clearfix">
                        <p className="card-text float-left">{t(`home.BuyItemInfoCard.item_price`)}</p>
                        <p className="float-right">{t(`home.BuyItemInfoCard.price`)}</p>
                    </div>

                    <div className="discount clearfix">
                        <p className="card-text float-left">{t(`home.BuyItemInfoCard.discount`)}</p>
                        <p className="float-right">{t(`home.BuyItemInfoCard.discount_price`)}</p>
                    </div>

                    <div className="delivery clearfix">
                        <p className="card-text float-left">{t(`home.BuyItemInfoCard.delivery`)}</p>
                        <p className="float-right">{t(`home.BuyItemInfoCard.delivery_price`)}</p>
                    </div>

                </div>
                <div className="card-body bg-light border-top">
                    <div className="total clearfix font-weight-bold">
                        <h3 className="card-text float-left">{t(`home.BuyItemInfoCard.total`)}</h3>
                        <h3 className="float-right">{t(`home.BuyItemInfoCard.total_price`)}</h3>
                    </div>
                    <p className="mt-4">{t(`home.BuyItemInfoCard.terms_of_item_info_1`)}<a href="#">{t(`home.BuyItemInfoCard.terms_of_item_info_2`)}</a></p>
                </div>
            </div>

        );
    }
}

export default withTranslation() (BuyItemInfoCard);
