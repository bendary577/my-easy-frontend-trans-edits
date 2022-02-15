import React, { Component } from "react";
import '../../public/css/home.css';
import Welcome from '../ScreenSnippets/home/Welcome';
import About from '../ScreenSnippets/home/About';
import Services from '../ScreenSnippets/home/Services';
import ContactUs from '../ScreenSnippets/home/ContactUs';
import Panal from '../ScreenSnippets/home/Panal';
import Footer from '../ScreenSnippets/accounts/Footer';
import Offers from "../ScreenSnippets/home/Offers";
import HomeNavbar from "../ScreenSnippets/home/HomeNavbar";
import { withTranslation } from 'react-i18next';

class Home extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="parent-div">
                <HomeNavbar />
                <Welcome />
                <Services />
                <Panal head={t(`home.panel.title`)} p={t(`home.panel.description`)}
                    href="/store" a={t(`home.panel.action`)} />
                <About />
                <hr />
                <Offers />
                <ContactUs />
                <Footer />
            </div>
        )
    }
}

export default withTranslation()(Home);
