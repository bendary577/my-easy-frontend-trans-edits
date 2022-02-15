import React, { Component } from "react";
import logo from '../../../public/images/Home/myeasy-logo.png';
import LanguageSwitcher from "../../Components/Buttons/LanguageSwitcher";
import { withTranslation } from 'react-i18next';
import '../../../public/css/homenavbar_section.css';

class HomeNavbar extends Component {


    constructor(props){
        super(props);
    }


    render() {

        const { t } = this.props;

        const logoStyle = {
            width: 100,
            height: 100,
        };

        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand font-weight-bold" href="#">
                <img src={logo} alt="Logo"  style={logoStyle}/>
                My Easy
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#services">{t('home.navbar.services')}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#about">{t('home.navbar.aboutus')}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#offers">{t('home.navbar.offers')}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contacts">{t('home.navbar.contacts')}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/privacypolicy">{t('home.navbar.privacy_policy')}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/termsofservice"> {t('home.navbar.terms_of_service')}</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item mx-2">
                    <LanguageSwitcher />
                </li>
                <li className="nav-item">
                    <a className="btn btn-sm btn-success mt-2 mx-3" href="/signin">{t('home.navbar.login')}</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        );
    }
}
export default withTranslation()(HomeNavbar);

