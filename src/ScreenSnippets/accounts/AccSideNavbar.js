import React, { Component } from "react";
import AccCustomerLinks from "./AccCustomerLinks";
import AccSellerLinks from "./AccSellerLinks";
import "../../../public/css/accsidenavbar.css";
import { withTranslation } from "react-i18next";
class AccSideNavbar extends Component {

    render() {
        const {t}=this.props;
        return (    
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading"><h3>{t(`home.AccSideNavbar.dashboard`)}</h3></div>
                {this.props.user === "customer" ?  <AccCustomerLinks />  : <AccSellerLinks />  }   
            </div>
        );
    }
}

export default withTranslation()(AccSideNavbar);
