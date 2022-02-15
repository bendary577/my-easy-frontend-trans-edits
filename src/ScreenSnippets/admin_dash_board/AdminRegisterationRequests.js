import React, { Component } from 'react';
import RegisterationRequests from './Snippets/RegisterationRequests';
import { withTranslation } from 'react-i18next';
class AdminRegisterationRequests extends Component {
    render() {
        const {t}=this.props;
        return (
                       
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1 className="m-0 text-dark">{t(`home.AccSideNavbar.dashboard`)}</h1>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <div className="content">
                    <div className="container-fluid">
                    <div className="row">
                        <RegisterationRequests />
                    </div>
                    {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content */}
                </div>
        )
    }
}

export default withTranslation() (AdminRegisterationRequests);