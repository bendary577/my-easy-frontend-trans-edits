import React, { Component } from "react";
import file1 from '../../../public/icons/approval/file1.jfif';
import file2 from '../../../public/icons/approval/file2.jpg';
import file3 from '../../../public/icons/approval/file3.png';

class ApprovalFilesCarousel extends Component {

    render() {
        return (
            <div className="parent-div mb-3">

                    {/* --------------------------- indicators ------------------------------- */}
                        <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

                            <div class="controls-top text-center">
                                <a class="btn btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
                                <a class="btn btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
                            </div>

                            <ol class="carousel-indicators">
                                <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                                <li data-target="#multi-item-example" data-slide-to="1"></li>
                                <li data-target="#multi-item-example" data-slide-to="2"></li>
                            </ol>

                            <div class="carousel-inner" role="listbox">

                            <div class="carousel-item active">

                                <div class="row">
                                <div class="col-md-4">
                                    <img
                                            src={file1}
                                            data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                            alt="Gallery image 1"
                                            class="active w-100"
                                        />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <img
                                            src={file2}
                                            data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                            alt="Gallery image 2"
                                            class="w-100"
                                        />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <img
                                            src={file3}
                                            data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                            alt="Gallery image 3"
                                            class="w-100"
                                    />
                                </div>
                                </div>

                            </div>
{/*}
                            <div class="carousel-item">

                                <div class="row">
                                <div class="col-md-4">
                                <img
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        alt="Gallery image 4"
                                        class="w-100"
                                        />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                <img
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        alt="Gallery image 4"
                                        class="w-100"
                                        />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                <img
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        alt="Gallery image 4"
                                        class="w-100"
                                        />
                                </div>
                                </div>

                            </div>

                            <div class="carousel-item">

                                <div class="row">
                                <div class="col-md-4">
                                <img
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        alt="Gallery image 4"
                                        class="w-100"
                                        />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                <img
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        alt="Gallery image 4"
                                        class="w-100"
                                        />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                <img
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        alt="Gallery image 4"
                                        class="w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        */}
                            </div>
                        </div>
{/* ---------------------------------- end carousel ------------------- */}
                    </div>

        );
    }
}

export default ApprovalFilesCarousel;
