import React, { Component } from "react";
import OrdersChart from './OrdersChart';
import TransactionsChart from "./TransactionsChart";

class SellerCharts extends Component {

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
        return (    
                 
            <div className="row">
                
                {/*---------------------------- card1-----------------------------*/}

                <div className="col-md-6 col-sm-12 mb-3 ">
                    <div class="card w-100">
                        <div className="card-body">
                            <OrdersChart />
                        </div>
                    </div>
                </div>

                {/*---------------------------- card2-----------------------------*/}

                <div className="col-md-6 col-sm-12 mb-3 ">
                    <div className="card">
                        <div className="card-body">
                            <TransactionsChart />
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default SellerCharts;
