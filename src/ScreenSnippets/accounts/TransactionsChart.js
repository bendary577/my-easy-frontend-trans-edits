import React, { Component } from "react";
import Chart from "react-apexcharts";
import { withTranslation } from 'react-i18next';

class TransactionsChart extends Component {

    constructor(props){
        super(props);
        this.state = {
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
              }
            },
            series: [
              {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
              }
            ]
          };
    };

    render() {
const {t}=this.props;

        return (    
                 
            <div className="app w-100">
              <div className="">
                  <div className="my-2">
                      <h4>{t(`home.SellerActions.transaction`)}</h4>
                  </div>
                  <div className="mixed-chart">
                      <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="line"
                      width="400"
                      />
                  </div>
              </div>
        </div>


        );
    }
}

export default withTranslation() (TransactionsChart);
