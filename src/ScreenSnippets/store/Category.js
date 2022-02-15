import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Category extends Component {
    render() {
        const {t}=this.props;
        return (
            <div className="left-side w-100 text-center">
                <h2>{t(`home.category.categ`)}</h2>

                <div className="panal-group category-products">
                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">{t(`home.category.shoes`)}</a></h4>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">{t(`home.category.laptop`)}</a></h4>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">{t(`home.category.electronic`)}</a></h4>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">{t(`home.category.man`)}</a></h4>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">{t(`home.category.woamen`)}</a></h4>
                        </div>
                    </div>
                </div>

                <div className="price-range">
                    <h2>{t(`home.category.price|_range`)}</h2>
                    {t(`home.category.from`)}<input type="range" class="form-range" />0
                    <br />
                    {t(`home.category.to`)}<input type="range" class="form-range" />1000
                </div>
            </div>
        )
    }
}

export default withTranslation() (Category);