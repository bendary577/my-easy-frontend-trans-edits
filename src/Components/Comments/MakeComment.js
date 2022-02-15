import React, { Component } from "react";
import image from "../../../public/images/person_2.jpg";

class MakeComment extends Component {
  render() {

    const imageStyle={
        width:40,
        height:40
    };

    return (
        <div className="p-2">
            <form>
                <div className="d-flex">
                    <div className="">
                        <img className="rounded-circle" src={image} style={imageStyle} alt=""/>
                    </div>
                    <div className="ml-2 w-100">
                         <input type="text" placeholder="type a comment..." className="p-2 bg-light border rounded w-100"/>
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default MakeComment;
