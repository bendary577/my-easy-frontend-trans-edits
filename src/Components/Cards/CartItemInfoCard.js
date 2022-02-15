import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import "../../../public/css/itemcartcard.css";
import book1 from "../../../public/images/book_1.png";
import { withTranslation } from 'react-i18next';



class CartItemInfoCard extends Component {

    render() {
        const{t}=this.props;
        return (
            <div class="card w-100 m-0 itemcartcard">
                <img src={book1} calssName="card-img img-responsive" />
                <div className="card-body">
                    <div className="clearfix">
                        <h6 className="float-left">{t(`home.CartItemInfoCard.item_name`)}</h6>
                        <div className="float-right">
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStarHalf} className="checked"></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="text-secondary">
                        <p>{t(`home.CartItemInfoCard.cart_text`)}</p>
                    </div>

                    <div className="clearfix">
                        <p className="text-success mt-2 float-left">{t(`home.CartItemInfoCard.cart_price`)}</p>
                        <a className="btn btn-danger w-50 float-right" href="/buyitem" role="button">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2"></FontAwesomeIcon>
                            {t(`home.CartItemInfoCard.buy`)}
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

export default withTranslation() (CartItemInfoCard);
