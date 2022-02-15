import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import "../../../public/css/itemcartcard.css";
import product from "../../../public/images/Products/shoes.jpg";
import { withTranslation } from 'react-i18next';



class RecommendItemInfoCard extends Component {


    render() {
        const{t}=this.props;
        return (
            <div class="card w-100 m-0 itemcartcard">
                <img src={product} calssName="card-img img-responsive" />
                <div className="card-body">
                    <div className="clearfix">
                        <h6 className="float-left">{t(`home.RecommendItemInfoCard.item_name`)}</h6>
                        <div className="float-right">
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStarHalf} className="checked"></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="clearfix mt-2">
                        <h6 className="text-success float-left mt-2">{t(`home.RecommendItemInfoCard.item_price`)}</h6>
                        <a className="btn btn-success float-right" href="/viewitem" role="button">
                        {t(`home.RecommendItemInfoCard.item_detail`)}
                        </a>
                    </div>

                    <div className="clearfix mt-3">
                        <a className="btn btn-warning float-left" href="/mycart" role="button">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2"></FontAwesomeIcon>
                            {t(`home.RecommendItemInfoCard.cart`)}
                        </a>

                        <a className="btn btn-danger float-right" href="/buyitem" role="button">
                            <FontAwesomeIcon icon={faMoneyBill} className="mr-2"></FontAwesomeIcon>
                            {t(`home.RecommendItemInfoCard.buy`)}
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

    export default withTranslation() (RecommendItemInfoCard);
