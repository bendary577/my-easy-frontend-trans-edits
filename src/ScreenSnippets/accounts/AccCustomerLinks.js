import React, { Component } from "react";
import wallet from '../../../public/icons/profile/wallet.png';
import orders from '../../../public/icons/profile/orders.png';
import account from '../../../public/icons/profile/account.png';
import overview from '../../../public/icons/profile/overview.png';
import privacyPolicy from '../../../public/icons/profile/privacy-policy.png';
import termsAndConditions from '../../../public/icons/profile/terms-conditions.png';
import help from '../../../public/icons/profile/help.png';
import cart from '../../../public/icons/profile/cart.png';
import myorders from '../../../public/icons/profile/myorders.png';
import { withTranslation } from "react-i18next";

const iconStyle = {
    width : 20,
    height : 20,
    marginRight : 5
}


class AccCustomerLinks extends Component {
    render() {
        const {t}=this.props;
        return (    
            <div>
                 <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={wallet} style={iconStyle} className="" alt="" />
                        {t(`home.acccustomerlinks.wallet`)}<strong className="text-success ml-5">$0</strong>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={orders} style={iconStyle} className="" alt="" />
                        {t(`home.acccustomerlinks.ordernum`)} <strong className="text-success ml-3">0</strong>
                    </a>
                    <a href="/profile" class="list-group-item list-group-item-action bg-light">
                        <img src={account} style={iconStyle} className="" alt="" />
                        {t(`home.acccustomerlinks.myprofile`)}
                    </a>
                    <a href="/mycart" class="list-group-item list-group-item-action bg-light">
                        <img src={cart} style={iconStyle} className="" alt="" />
                        {t(`home.acccustomerlinks.mycart`)}
                    </a>
                    <a href="/myorders" class="list-group-item list-group-item-action bg-light">
                        <img src={myorders} style={iconStyle} className="" alt="" />
                        {t(`home.acccustomerlinks.myorders`)} 
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={overview} style={iconStyle} className="" alt="" />
                        {t(`home.acccustomerlinks.overview`)}
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={help} style={iconStyle} className="" alt="" />
                        {t(`home.acccustomerlinks.help`)}
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={privacyPolicy} style={iconStyle} className="" alt="" />
                        {t(`home.acccustomerlinks.privacy`)}
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={termsAndConditions} style={iconStyle} className="" alt="" />
                        {t(`home.acccustomerlinks.terms`)}
                    </a>
                </div>
            </div>

        );
    }
}

export default withTranslation() (AccCustomerLinks);
