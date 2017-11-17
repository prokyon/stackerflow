import React from "react";
import ModalWindow from "../Navbar/ModalWindow";
import Like from "./Like";
import connectToStores from "alt-utils/lib/connectToStores";
import QuestionStore from "../../stores/QuestionStore";
import Actions from "../../actions";

@connectToStores
class AnswerModal extends React.Component {
  constructor() {
    super();

    // dummy data
    this.state = {
      answers: [
        {
          name: "Ned Flanders",
          avatar: "/img/user.png",
          reply: "This is a helpful Stackerflow answer. Lorem ipsum..."
        },
        {
          name: "Nelson",
          avatar: "/img/user.png",
          reply: "Ha ha! Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        }
      ]
    }
  }

  static getStores() {
    return [QuestionStore];
  }

  static getPropsFromStores() {
    return QuestionStore.getState();
  }

  renderHeader() {
    return (
      <header style={{backgroundImage: "url(" + this.props.media + ")"}}>
        <section className="header-shadow">
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
          <section>
            <Like {...this.props} />
            <a className="visit-link-button" href={this.props.link} target="_blank">Visit Link</a>
          </section>
        </section>
      </header>
    );
  }

  answerListener = (e) => {
    // When pressing enter and answer is not empty
    if(e.keyCode === 13 && e.target.value.length > 0) {
      var answer = {
        reply: e.target.value,
        name: this.props.user.name,
        avatar: this.props.user.avatar
      }
      Actions.addAnswer(this.props.qid, answer);
      e.target.value = null; // set text box to empty
    }
  }

  renderAnswerField() {
    return (
      <section className="answers">
        <h2>Answers</h2>
        {
          this.props.user
          ?
          <section className="post-answer">
            <img className="avatar-medium" src={this.props.user.avatar}/>
            <input placeholder="Enter your answer here" onKeyUp={this.answerListener}/>
          </section>
          :
          null
        }
        {this.renderCommunityAnswers()}
      </section>
    );
  }

  renderAnswerBox() {
    return (
      <section className="question-modal-body">
        <main>
          {this.renderAnswerField()}
        </main>
      </section>
    );
  }

  renderCommunityAnswers() {
    return (
      <ul className="answer-list">
        {
          this.state.answers.map(function(answer, idx) {
            return (
              <li key={idx}>
                <img className="avatar-small" src={answer.avatar}/>
                <section>
                  <strong>{answer.name}</strong>
                  <p>{answer.reply}</p>
                </section>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <ModalWindow {...this.props} style="question-modal">
        {this.renderHeader()}
        {this.renderAnswerBox()}
      </ModalWindow>
    );
  }
}

export default AnswerModal;
