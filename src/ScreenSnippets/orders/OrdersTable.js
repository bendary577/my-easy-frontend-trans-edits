
import React, { Component } from "react";


class OrdersTable extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="parent">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Order Date</th>
                            <th>Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.props.orders.map(order =>
                            <tr key={order.id}>
                                <td>{order.customer_name}</td>
                                <td>{order.created_at}</td>
                                <td><a href="/orderdetails" className="btn btn-md btn-primary">View Order Details</a></td>
                            </tr>
                            )}
                    </tbody>
                </table>                    
            </div>
        );
    }
}

export default OrdersTable;
