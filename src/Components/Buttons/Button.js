import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../public/css/button.css"

class Button extends Component {


    render() {
        const buttonStyle = {
            color : "black",
            width : 300,
            height : 150,
            backgroundColor : 'yellow',
            borderWidth : 2, 
            borderColor : 'red',
            borderStyle : 'solid',
            margin : 10,
        };


        return (
            <div className="myeasybutton" style={buttonStyle}>  
                <Link to={this.props.link}>{this.props.value}</Link>
            </div>
        );
    }
}

export default Button;
