import React, { Component } from "react";
import Comment from "./Comment";
import MakeComment from "./MakeComment";

class CommentSection extends Component {

    render() {
        return (
            <div className="comment-section shadow-sm border rounded p-2">  
               <Comment />
               <Comment />
               <Comment />
               <MakeComment />
            </div>
        );
    }
}

export default CommentSection;
