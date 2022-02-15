import React, { Component } from "react";
import AdminNavbar from "../ScreenSnippets/admin_dash_board/AdminNavbar";
import AdminSideMenu from "../ScreenSnippets/admin_dash_board/AdminSideMenu";
import AdminFooter from "../ScreenSnippets/admin_dash_board/AdminFooter";
import ApprovalFilesCarousel from "../Components/Carousels/ApprovalFilesCarousel";
class AdminUserApprovalFiles extends Component {

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
                        {/*
                        <div className="parent my-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 h-50">
                                        <div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                                            <div class="row py-3 shadow-5">
                                                <div class="col-12 mb-1">
                                                <div class="lightbox">
                                                    <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                                    alt="Gallery image 1"
                                                    class="ecommerce-gallery-main-img active w-100"
                                                    />
                                                </div>
                                                </div>
                                                <div class="col-3 mt-1">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                                    alt="Gallery image 1"
                                                    class="active w-100"
                                                />
                                                </div>
                                                <div class="col-3 mt-1">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    alt="Gallery image 2"
                                                    class="w-100"
                                                />
                                                </div>
                                                <div class="col-3 mt-1">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                                    alt="Gallery image 3"
                                                    class="w-100"
                                                />
                                                </div>
                                                <div class="col-3 mt-1">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                                    alt="Gallery image 4"
                                                    class="w-100"
                                                />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="action">
                                            <div className="d-flex">
                                                <button className="btn btn-success btn-lg">Accept</button>
                                                <button className="btn btn-danger btn-lg ml-2">Block</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        */}
                        <div className="my-2">
                            <ApprovalFilesCarousel />
                            <div className="d-flex">
                                                <button className="btn btn-success btn-lg">Accept</button>
                                                <button className="btn btn-danger btn-lg ml-2">Block</button>
                                            </div>         
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

export default AdminUserApprovalFiles;
