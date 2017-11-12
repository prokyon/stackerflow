import React from "react";

class QuestionItem extends React.Component {
  render() {
    return (
      <li className="question-item">
        <a className="like-button" href="#">
          <span>
            <i className="fa fa-thumbs-o-up"></i>
          </span>
          <br/>
          {this.props.likes}
        </a>
        <img className="question-item-media" src={this.props.media} />
        <section className="question-item-info">
          <a href="#">
            <h2>{this.props.name}</h2>
          </a>
          <p>{this.props.description}</p>
          <a href="#">
            <img className="avatar-small" src={this.props.user.avatar} />
          </a>
        </section>
        <a className="question-item-link" href={this.props.link}>
          <span>
            <i className="fa fa-link fa-2x"></i>
          </span>
        </a>
      </li>
    );
  }
}

export default QuestionItem;
