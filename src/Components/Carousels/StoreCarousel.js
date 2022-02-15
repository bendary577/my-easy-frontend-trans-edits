import React, { Component } from "react";
import StoreCard from "../../ScreenSnippets/store/StoreCard";
import storecard from "../../../public/icons/stores/storecard.png";
import store2 from "../../../public/icons/stores/store-2.png";
import store3 from "../../../public/icons/stores/store-3.png";
import store4 from "../../../public/icons/stores/store-4.png";
import store5 from "../../../public/icons/stores/store-5.png";
import store6 from "../../../public/icons/stores/store-6.png";
import store7 from "../../../public/icons/stores/store-7.jfif";
import store8 from "../../../public/icons/stores/store-8.png";
import store9 from "../../../public/icons/stores/store-9.png";

class StoreCarousel extends Component {

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
                                    <StoreCard icon={storecard}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard icon={store2} />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard icon={store3}/>
                                </div>
                                </div>

                            </div>

                            <div class="carousel-item">

                                <div class="row">
                                <div class="col-md-4">
                                    <StoreCard icon={store4}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard icon={store5}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard icon={store6}/>
                                </div>
                                </div>

                            </div>

                            <div class="carousel-item">

                                <div class="row">
                                <div class="col-md-4">
                                    <StoreCard icon={store7}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard icon={store8}/>
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                     <StoreCard icon={store9}/>
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

export default StoreCarousel;
