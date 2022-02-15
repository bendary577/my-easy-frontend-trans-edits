import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import "../../../public/css/itemcartcard.css";
import storecard from "../../../public/icons/stores/storecard.png";
import { withTranslation } from 'react-i18next';



class StoreCard extends Component {


    render() {
        const {t}=this.props;
        return (
            <div class="card w-100 m-0 itemcartcard border">
                <img src={this.props.icon} calssName="card-img img-responsive" />
                <div className="card-body">
                    <div className="clearfix">
                        <h6 className="float-left">{t(`home.StoreCard.store_name`)}</h6>
                        <div className="float-right">
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStarHalf} className="checked"></FontAwesomeIcon>
                        </div>
                    </div>

                    <div class="store_details">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="my-2">
                        <a className="btn btn-success btn-block" href="/view_store" role="button">
                        {t(`home.StoreCard.visit_store`)}
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

    export default withTranslation() (StoreCard);
