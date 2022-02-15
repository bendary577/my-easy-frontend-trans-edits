import React, { Component } from "react";
import AdminNavbar from "../ScreenSnippets/admin_dash_board/AdminNavbar";
import AdminFooter from "../ScreenSnippets/admin_dash_board/AdminFooter";
import AdminSideMenu from "../ScreenSnippets/admin_dash_board/AdminSideMenu";

class AdminWelcomeView extends Component {

    render() {

        return (
            <div class="wrapper">
            <AdminNavbar />
            <AdminSideMenu  />
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
            <div className="parent">
                <h2>Welcome To Dashboard</h2>
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

export default AdminWelcomeView;
