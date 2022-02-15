import React, { Component } from "react";
import image from "../../../public/images/person_2.jpg";
import { withTranslation } from 'react-i18next';

class Comment extends Component {
  render() {
    const imageStyle={
        width:40,
        height:40
    };
    const {t}=this.props;
    return (
      <div className="comment my-1 p-2">
          <div className="d-flex">
              <div className="comment-image mt-4">
                    <img className="rounded-circle" src={image} style={imageStyle} alt=""/>
              </div>
              <div className="comment-body rounded bg-light ml-2 p-3 w-100">
                <h6 className="">{t(`home.comment.comment_title`)}</h6>
                <p>{t(`home.comment.comment_text`)}</p>
             </div>   
          </div>
          <div className="d-flex ml-5">
              <p className="font-weight-light text-muted mr-3">{t(`home.comment.comment_reply`)}</p>
              <p className="font-weight-light text-muted">{t(`home.comment.comment_time`)}</p>
          </div>
      </div>
    );
  }
}

export default withTranslation() (Comment);
