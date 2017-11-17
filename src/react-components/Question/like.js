import React from "react";
import Actions from "../../actions";
import connectToStores from "alt-utils/lib/connectToStores";
import QuestionStore from "../../stores/QuestionStore";

@connectToStores
class Like extends React.Component {
  static getStores() {
    return [QuestionStore];
  }

  static getPropsFromStores() {
    return QuestionStore.getState();
  }

  likeListener = () => {
    Actions.addLike(this.props.qid, this.props.user.id)
  }

  render() {
    return (
      <a className="like-button" onClick={this.likeListener} href="#">
        <span>
          <i className="fa fa-thumbs-o-up"></i>
        </span>
        <br/>
        {this.props.likes}
      </a>
    );
  }
}

export default Like;
