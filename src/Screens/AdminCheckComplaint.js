
import React, { Component } from "react";
import AdminNavbar from "../ScreenSnippets/admin_dash_board/AdminNavbar";
import AdminFooter from "../ScreenSnippets/admin_dash_board/AdminFooter";
import AdminSideMenu from "../ScreenSnippets/admin_dash_board/AdminSideMenu";


class AdminRegisterationRequestsView extends Component {

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
                        <div className="card p-3">
                            <div><h1>An order was not delivered in time</h1> <div className="badge badge-danger">severe</div></div>
                            <p>mohamed ali</p>
                            <p>22/3/2021</p>
                            <div className="mt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                            <button className="btn btn-primary btn-lg mt-2">reply</button>
                        </div>
   
                    </div>
                    </div>
                </div>
                <AdminFooter />
            </div>
        );
    }
}

export default AdminRegisterationRequestsView;
