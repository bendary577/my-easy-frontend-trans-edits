import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../../public/css/accsidenavbar.css";
import { withTranslation } from 'react-i18next';

class BrowseStoreSideNav extends Component {

    state = {
        rating: '',
        stores: '',
      }
    
    handleChange = event => {
        event.preventDefault();
        this.setState({ rating: event.target.value });

        axios.get(`https://jsonplaceholder.typicode.com/stores`)
             .then(res => {
                const stores = res.data;
                this.setState({ stores });
            })
      }

    render() {
        const {t}=this.props;
        return (    

            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading">{t(`home.AccSellerLinks.easyaccount`)}</div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action bg-light">{t(`home.AccSellerLinks.order_num`)}<strong className="text-success ml-3">0</strong></a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">{t(`home.AccSellerLinks.over`)}</a>
                    <div class="rating list-group-item-action  ">
                        <p className="ml-3 mt-2">{t(`home.AccSellerLinks.store_rating`)}</p>
                        <ul class="items-list ml-3">
                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">55</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>

                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2 d-flex">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <p className="ml-1">{t(`home.AccSellerLinks.more`)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">55</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>

                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2 d-flex">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <p className="ml-2">{t(`home.AccSellerLinks.more`)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">0</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>

                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2 d-flex">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <p className="ml-2">{t(`home.AccSellerLinks.more`)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">12</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>

                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2 d-flex">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <p className="ml-2">{t(`home.AccSellerLinks.more`)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">34</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="sellerbadge ">
                    <p className="ml-3 mt-2">{t(`home.AccSellerLinks.seller_rank`)}</p>
                        <ul class="items-list ml-3">
                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="checkbox" id="badge" name="badge" className="mt-2"/>
                                            <div className="ml-2">
                                                <p>{t(`home.AccSellerLinks.gold`)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">55</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>
                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="checkbox" id="badge" name="badge" className="mt-2"/>
                                            <div className="ml-2">
                                                <p>{t(`home.AccSellerLinks.silver`)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">17</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>
                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="checkbox" id="badge" name="badge" className="mt-2"/>
                                            <div className="ml-2">
                                                <p>{t(`home.AccSellerLinks.bronze`)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">5</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <a href="#" class="list-group-item list-group-item-action bg-light">{t(`home.AccSellerLinks.help`)}</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">{t(`home.AccSellerLinks.priv`)}</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">{t(`home.AccSellerLinks.terms`)}</a>
            
                </div>
            </div>

        );
    }
}

export default withTranslation() (BrowseStoreSideNav);
