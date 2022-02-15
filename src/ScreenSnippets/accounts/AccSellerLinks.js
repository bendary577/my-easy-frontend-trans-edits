import React, { Component } from "react";
import wallet from '../../../public/icons/profile/wallet.png';
import orders from '../../../public/icons/profile/orders.png';
import account from '../../../public/icons/profile/account.png';
import stores from '../../../public/icons/profile/stores.png';
import invoices from '../../../public/icons/profile/invoices.png';
import overview from '../../../public/icons/profile/overview.png';
import privacyPolicy from '../../../public/icons/profile/privacy-policy.png';
import termsAndConditions from '../../../public/icons/profile/terms-conditions.png';
import help from '../../../public/icons/profile/help.png';
import integration from '../../../public/icons/profile/integration.png';
import customers from '../../../public/icons/profile/customers.png';
import withdraw from '../../../public/icons/profile/withdraw.png';
import myorders from '../../../public/icons/profile/myorders.png';
import make_invoice from '../../../public/icons/profile/new_invoice.png';
import my_invoices from '../../../public/icons/profile/my_invoices.png';
import make_complaint from '../../../public/icons/profile/make_complaint.png';
import my_complaints from '../../../public/icons/profile/my_compalints.png';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const iconStyle = {
    width : 20,
    height : 20,
    marginRight : 5
}

class AccSellerLinks extends Component {

    constructor(props){
        super(props);
        this.state = {
            canWithdrawMoney : false,
            checkWithdraw : false,
        }
    }

    checkCanWithdrawMoney = () => {
        this.props.history.push('/withdraw_money')
        /*
        this.setState({
            checkWithdraw : !this.state.checkWithdraw
        })
        */
    }

    render() {
        const { t } = this.props;
        return (    
            <div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={wallet} style={iconStyle} className="" alt="" />
                            {t('home.AccSellerLinks.wallet')}
                        <div className="alert alert-success mt-2 text-center">
                            <h3><strong className="text-success">0.00 EGP</strong></h3>
                            <a href="" className="text-primary">change to dollar</a>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <button className="btn btn-danger" onClick={this.checkCanWithdrawMoney}>
                            <img src={withdraw} style={iconStyle} className="" alt="" />
                            {t('home.AccSellerLinks.withdraw')}
                        </button>
                        {
                           this.state.checkWithdraw  === true ? 

                           <div className="alert alert-danger mt-2">{t('home.AccSellerLinks.check')}</div>
                           :
                           <div></div>
                        }
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={orders} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.order_num')}<strong className="text-success ml-3">0</strong>
                    </a>
                    <a href="/profile" class="list-group-item list-group-item-action bg-light">
                        <img src={account} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.profile')}
                    </a>
                    <a href="/mystore" class="list-group-item list-group-item-action bg-light">
                        <img src={stores} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.store')}
                    </a>
                    {/* ---------------------------- orders --------------------------------- */}
                    <a href="/myorders" class="list-group-item list-group-item-action bg-light">
                        <img src={orders} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.orders')}
                    </a>
                    {/* --------------------------- invoices --------------------------------- */}
                    <a class="list-group-item list-group-item-action bg-light dropdown-toggle" href="#invoices_collapse" data-toggle="collapse" aria-expanded="false">
                        <img src={invoices} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.invoices_1')}
                    </a>
                    <ul class="collapse list-unstyled" id="invoices_collapse">
                        <a href="/myinvoices" class="list-group-item list-group-item-action bg-light">
                            <img src={my_invoices} style={iconStyle} className="" alt="" />
                            {t('home.AccSellerLinks.invoices_2')}
                        </a>
                        <a href="/myinvoices" class="list-group-item list-group-item-action bg-light">
                            <img src={make_invoice} style={iconStyle} className="" alt="" />
                            {t('home.AccSellerLinks.invoices_3')}
                        </a>
                    </ul>

                    {/* ------------------------- complaint ------------------------------------- */}
                    <a class="list-group-item list-group-item-action bg-light dropdown-toggle" href="#complaints_collapse" data-toggle="collapse" aria-expanded="false">
                        <img src={customers} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.complaints_0')}    
                    </a>
                    <ul class="collapse list-unstyled" id="complaints_collapse">
                        <a href="/make_complaint" class="list-group-item list-group-item-action bg-light">
                            <img src={my_complaints} style={iconStyle} className="" alt="" />
                            {t('home.AccSellerLinks.complaints_1')}
                        </a>
                        <a href="/make_complaint" class="list-group-item list-group-item-action bg-light">
                            <img src={make_complaint} style={iconStyle} className="" alt="" />
                            {t('home.AccSellerLinks.complaints_2')}
                        </a>
                    </ul>
                     {/* ------------------------- integration ------------------------------------- */}
                    <a href="/integration" class="list-group-item list-group-item-action bg-light">
                        <img src={integration} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.integration')}
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={overview} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.view')}
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={help} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.help')}
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={privacyPolicy} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.priv')}
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={termsAndConditions} style={iconStyle} className="" alt="" />
                        {t('home.AccSellerLinks.terms')}
                    </a>
                    
                </div>
            </div>

        );
    }
}

export default  withTranslation()(AccSellerLinks);
