import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class CategoriesNavbar extends Component {


    render() {
        const {t}=this.props;
        return (
            <nav className="navbar navbar-expand-sm bg-secondary d-flex justify-content-center">
                <ul className="nav navbar-nav">

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.electronic`)}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-1`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-2`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-2`)}</a></li>
                        </ul>
                    </li>

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.food`)}  
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-1`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-2`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-3`)}</a></li>
                        </ul>
                    </li>

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.items`)}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.clothes`)}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-1`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-2`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-3`)}</a></li>
                        </ul>
                    </li>

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.furniture`)}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-1`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-3`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-4`)}</a></li>
                        </ul>
                    </li>

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.books`)}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-1`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-2`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-3`)}</a></li>
                        </ul>
                    </li>

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.mobiles`)}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-1`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-2`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-3`)}</a></li>
                        </ul>
                    </li>

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.kitchen`)}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-1`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-2`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-3`)}</a></li>
                        </ul>
                    </li>

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.games`)}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-1`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-2`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-3`)}</a></li>
                        </ul>
                    </li>

                    <li class="dropdown mx-3">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" className="text-white">
                        {t(`home.CategoriesNavbar.sports`)}
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-1`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-2`)}</a></li>
                            <li><a href="#">{t(`home.CategoriesNavbar.page 1-3`)}</a></li>
                        </ul>
                    </li>
                    
                </ul>
          </nav>
        );
    }
}

export default withTranslation()(CategoriesNavbar);
