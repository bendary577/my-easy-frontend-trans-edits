import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import book from '../../../public/images/book_1.png';
import { withTranslation } from 'react-i18next';

class StoreItemCardDemo extends Component {

    constructor(props) {
        super(props);
      }

      render() {
          const imageStyle = {
              width : "100%",
              height : "100%"
          }
          const {t}=this.props;
        return (
            <div class="card" /*style={{height:400}}*/>
                 <img src={this.props.icon} style={imageStyle} calssName="card-img img-responsive" alt="" /> 
                <div className="card-body">
                    {/* ----------------------------------------- name and ratings------------------ */}
                    <div className="clearfix">
                        <h6 className="float-left">{t(`home.StoreItemCardDemo.prod_name`)}</h6>
                        <div className="float-right">
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                        </div>
                    </div>

                    {/* ----------------------------------------- descripripton and price------------------ */}
                    <div /*style={{height:160}}*/>
                        <p className="text-secondary">{t(`home.StoreItemCardDemo.prod_desc`)}</p>
                        <p className="text-success mt-2">{t(`home.StoreItemCardDemo.prod_price`)}</p>
                    </div>

                    <div className="">
                        <a className="btn btn-success" href="/viewitem">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2"></FontAwesomeIcon>
                            {t(`home.StoreCard.item_details`)}
                        </a>
                    </div>

                    <div className="clearfix my-4">
                        <a className="btn btn-warning float-right" href="/mycart" role="button">
                            <FontAwesomeIcon icon={faCartPlus} className="mr-2"></FontAwesomeIcon>
                            {t(`home.StoreItemCardDemo.add`)}
                        </a>
                        <a className="btn btn-danger float-left" href="/buyitem" role="button">
                            <FontAwesomeIcon icon={faMoneyCheck} className="mr-2"></FontAwesomeIcon>
                            {t(`home.StoreItemCardDemo.buy`)}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation() (StoreItemCardDemo);