import React from "react";
import AnswerModal from "./AnswerModal";
import Like from "./Like";

class QuestionItem extends React.Component {
  constructor() {
    super();

    this.state = {
      answerModalStatus: false
    }
  }

  showAnswerModal = () => {
    this.setState({answerModalStatus: true});
  };

  hideAnswerModal = () => {
    this.setState({answerModalStatus: false});
  };

  renderQuestionDetails() {
    return (
      <section className="question-item-info">
        <a href="#" onClick={this.showAnswerModal}>
          <h2>{this.props.name}</h2>
        </a>
        <p>{this.props.description}</p>
        <a href="#">
          <img className="avatar-small" src={this.props.user.avatar} />
        </a>
      </section>
    );
  }

  renderExternalLink() {
    return (
      <a className="question-item-link" href={this.props.link}>
        <span>
          <i className="fa fa-link fa-2x"></i>
        </span>
      </a>
    );
  }

  render() {
    return (
      <li className="question-item">
        <Like {...this.props} />
        <img className="question-item-media" src={this.props.media} />
        {this.renderQuestionDetails()}
        {this.renderExternalLink()}
        <AnswerModal {...this.props} status={this.state.answerModalStatus} hideModal={this.hideAnswerModal} />
      </li>
    );
  }
}

export default QuestionItem;
