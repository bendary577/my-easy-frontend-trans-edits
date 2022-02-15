import React, { Component } from "react";
import StoreItemCardDemo from "../ScreenSnippets/store/StoreItemCardDemo";
import product1 from '../../public/icons/products/product1.jfif';
import product2 from '../../public/icons/products/product2.jfif';
import product3 from '../../public/icons/products/product3.jfif';
import product4 from '../../public/icons/products/product4.jfif';
import product5 from '../../public/icons/products/product5.jfif';
import product6 from '../../public/icons/products/product6.jfif';
import product7 from '../../public/icons/products/product7.jfif';
import product8 from '../../public/icons/products/product8.jfif';
import product9 from '../../public/icons/products/product9.jfif';

class ProductCarousel extends Component {

    render() {
        return (
            <div className="parent-div">

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
                                    <StoreItemCardDemo icon={product1}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreItemCardDemo icon={product2}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreItemCardDemo icon={product3}/>
                                </div>
                                </div>

                            </div>

                            <div class="carousel-item">

                                <div class="row">
                                <div class="col-md-4">
                                    <StoreItemCardDemo icon={product4}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreItemCardDemo icon={product5}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreItemCardDemo icon={product6}/>
                                </div>
                                </div>

                            </div>

                            <div class="carousel-item">

                                <div class="row">
                                <div class="col-md-4">
                                    <StoreItemCardDemo icon={product7}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreItemCardDemo icon={product8}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                     <StoreItemCardDemo icon={product9}/>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
{/* ---------------------------------- end carousel ------------------- */}
                    </div>

        );
    }
}

export default ProductCarousel;
