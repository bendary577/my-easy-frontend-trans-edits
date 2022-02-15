import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class AdminFooter extends Component {
    render() {
        const {t}=this.props;
        return (
            <footer className="main-footer">
                <strong>{t(`home.footer.copy`)}<a href="/">MyEasy.com</a></strong>
                {t(`home.footer.right`)}
            </footer>
        )
    }
}

export default withTranslation() (AdminFooter);