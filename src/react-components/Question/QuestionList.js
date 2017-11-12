import React from "react";

class QuestionList extends React.Component {
  render() {
    return (
      <ul className="question-list">
        <li className="question-item">
          <a className="like-button" href="#">
            <span>
              <i className="fa fa-thumbs-o-up"></i>
            </span>
            <br/>
            {this.props.questionList[0].likes}
          </a>
          <img className="question-item-media" src={this.props.questionList[0].media} />
          <section className="question-item-info">
            <a href="#">
              <h2>{this.props.questionList[0].name}</h2>
            </a>
            <p>{this.props.questionList[0].description}</p>
            <a href="#">
              <img className="avatar-small" src={this.props.questionList[0].user.avatar} />
            </a>
          </section>
          <a className="question-item-link" href={this.props.questionList[0].link}>
            <span>
              <i className="fa fa-link fa-2x"></i>
            </span>
          </a>
        </li>

        <li className="question-item">
          <a className="like-button" href="#">
            <span>
              <i className="fa fa-thumbs-o-up"></i>
            </span>
            <br/>
            {this.props.questionList[1].likes}
          </a>
          <img className="question-item-media" src={this.props.questionList[1].media} />
          <section className="question-item-info">
            <a href="#">
              <h2>{this.props.questionList[1].name}</h2>
            </a>
            <p>{this.props.questionList[1].description}</p>
            <a href="#">
              <img className="avatar-small" src={this.props.questionList[1].user.avatar} />
            </a>
          </section>
          <a className="question-item-link" href={this.props.questionList[1].link}>
            <span>
              <i className="fa fa-link fa-2x"></i>
            </span>
          </a>
        </li>
      </ul>
    );
  }
}

export default QuestionList;
