
import React, { Component } from "react";
import AdminNavbar from "../../ScreenSnippets/admin_dash_board/AdminNavbar";
import AdminFooter from "../../ScreenSnippets/admin_dash_board/AdminFooter";
import AdminSideMenu from "../../ScreenSnippets/admin_dash_board/AdminSideMenu";

class AdminManageUsersView extends Component {

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
            <div className="parent">
                <h4 className="mb-2">Manage Users</h4>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Type</th>
                    <th scope="col">Date Of Registeration</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">sunfoundary corp.</th>
                        <td>individual seller</td>
                        <td>2/1/2021</td>
                        <td>
                            <a href="/sellerProfile" className="btn btn-warning mr-2">check account</a>
                            <a href="" className="btn btn-danger">block</a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">sunfoundary corp.</th>
                        <td>customer</td>
                        <td>2/1/2021</td>
                        <a href="user_account" className="btn btn-warning mr-2">check account</a>
                            <a href="" className="btn btn-danger">block</a>
                    </tr>
                    <tr>
                        <th scope="row">sunfoundary corp.</th>
                        <td>individual seller</td>
                        <td>2/1/2021</td>
                        <a href="user_account" className="btn btn-warning mr-2">check account</a>
                            <a href="" className="btn btn-danger">block</a>
                    </tr>
                    <tr>
                        <th scope="row">sunfoundary corp.</th>
                        <td>company</td>
                        <td>2/1/2021</td>
                        <a href="user_account" className="btn btn-warning mr-2">check account</a>
                            <a href="" className="btn btn-danger">block</a>
                    </tr>
                    <tr>
                        <th scope="row">sunfoundary corp.</th>
                        <td>customer</td>
                        <td>2/1/2021</td>
                        <a href="user_account" className="btn btn-warning mr-2">check account</a>
                            <a href="" className="btn btn-danger">block</a>
                    </tr>
                </tbody>
                </table>
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

export default AdminManageUsersView;
