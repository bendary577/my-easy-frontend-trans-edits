
import React, { Component } from "react";
import AdminNavbar from "../ScreenSnippets/admin_dash_board/AdminNavbar";
import AdminFooter from "../ScreenSnippets/admin_dash_board/AdminFooter";
import AdminSideMenu from "../ScreenSnippets/admin_dash_board/AdminSideMenu";

class AdminTransactionsView extends Component {

    render() {

        return (
            
            <div class="wrapper">
            <AdminNavbar />
            <AdminSideMenu />
            <div class="content">
                <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1 className="m-0 text-dark">Dashboard</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                           
                        <div className="row">
                            <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header border-0">
                                <div className="d-flex justify-content-between">
                                    <h3 className="card-title">Payment Transactions</h3>
                                    <a href="javascript:void(0);">View Report</a>
                                </div>
                                </div>
                                <div className="card-body">
                                <div className="d-flex">
                                    <p className="d-flex flex-column">
                                    <span className="text-bold text-lg">820</span>
                                    <span>Visitors Over Time</span>
                                    </p>
                                    <p className="ml-auto d-flex flex-column text-right">
                                    <span className="text-success">
                                        <i className="fas fa-arrow-up" /> 12.5%
                                    </span>
                                    <span className="text-muted">Since last week</span>
                                    </p>
                                </div>
                                {/* /.d-flex */}
                                <div className="position-relative mb-4">
                                    <canvas id="visitors-chart" height={200} />
                                </div>
                                <div className="d-flex flex-row justify-content-end">
                                    <span className="mr-2">
                                    <i className="fas fa-square text-primary" /> This Week
                                    </span>
                                    <span>
                                    <i className="fas fa-square text-gray" /> Last Week
                                    </span>
                                </div>
                                </div>
                            </div>

                            {/* /.card */}
                            </div>

                            {/* /.col-md-6 */}
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <AdminFooter />
                </div>
        );
    }
}

export default AdminTransactionsView;
