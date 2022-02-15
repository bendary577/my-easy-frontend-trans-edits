import React, { Component } from 'react';
import Logo from '../../../public/images/Home/myeasy-logo.png';
import User from '../../../public/images/person_2.jpg';
import { withTranslation } from 'react-i18next';

class AdminSideMenu extends Component {


    render() {
        const {t}=this.props;
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="/admin" className="brand-link">
                <img src=/*"dist/img/AdminLTELogo.png"*/{Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">{t(`home.AdminSideMenu.admin`)}</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src/*"dist/img/user2-160x160.jpg"*/={User} className="img-circle elevation-2" alt="User Image" />
                </div>
                <div className="info">
                    <a href="#" className="d-block">Alexander Pierce</a>
                </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                                    with font-awesome or any other icon font library */}
                    <li className="nav-item mb-2">
                        <div className="bg-danger p-2 rounded">
                            <h4>{t(`home.AdminSideMenu.balance`)}</h4>
                            <h3>$0.00</h3>
                        </div>
                    </li>    
                                
                    <li className="nav-item has-treeview menu-open">
                    {/*
                    <a href="#" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                        Dashboard
                        <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="./index.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Dashboard v1</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="./index2.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Dashboard v2</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="./index3.html" className="nav-link active">
                            <i className="far fa-circle nav-icon" />
                            <p>Dashboard v3</p>
                        </a>
                        </li>
                    </ul>
                    */}
                    </li>
                    <li className="nav-item has-treeview">
                        
                    <a href="/admin/complaints" className="nav-link">
                        <i className="nav-icon fas fa-chart-pie" />
                        <p>
                        {t(`home.AdminSideMenu.complaints`)}
                        </p>
                    </a>
                    </li>
                    {/* ------------------------------ EXAMPLE ON DROPDOWN MENU ------------------------ */}
                    {/*
                    <li className="nav-item has-treeview">
                    <a href="javascript:void(0);" className="nav-link">
                        <i className="nav-icon fas fa-tree" />
                        <p>
                        Transactions
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="javascript:void(0);" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>General</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="javascript:void(0);" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Icons</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                    */}
                    <li className="nav-item has-treeview">
                        <a href="/admin/transactions" className="nav-link" >
                            <i className="nav-icon fas fa-tree" />
                            <p>
                            {t(`home.AdminSideMenu.transaction`)}
                            </p>
                        </a>
                    </li>
                    <li className="nav-item has-treeview">
                    <a href="/admin/signup_requests" className="nav-link" className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                        {t(`home.AdminSideMenu.signup`)}
                        </p>
                    </a>
                    </li>
                    <li className="nav-item has-treeview">
                        <a href="/admin/manage_users" className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <p>
                            {t(`home.AdminSideMenu.manage`)}
                            </p>
                        </a>
                    </li>
                    <li className="nav-item has-treeview">
                    <a href="/admin/customers" className="nav-link">
                        <i className="nav-icon fas fa-table" />
                        <p>
                        {t(`home.AdminSideMenu.customer`)}
                        </p>
                    </a>
                    </li>
                    <li className="nav-item has-treeview">
                    <a href="/admin/sellers" className="nav-link">
                        <i className="nav-icon fas fa-table" />
                        <p>
                        {t(`home.AdminSideMenu.seller`)}
                        </p>
                    </a>
                    </li>
                    <li className="nav-item has-treeview">
                    <a href="/admin/companies" className="nav-link">
                        <i className="nav-icon fas fa-table" />
                        <p>
                        {t(`home.AdminSideMenu.company`)}
                        </p>
                    </a>
                    </li>
                    <li className="nav-item has-treeview">
                    <a href="/admin/charts" className="nav-link">
                        <i className="nav-icon fas fa-chart-pie" />
                        <p>
                        {t(`home.AdminSideMenu.chart`)}
                        </p>
                    </a>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>

        )
    }
}

export default withTranslation() (AdminSideMenu);