import React from "react";
import ModalWindow from "../Navbar/ModalWindow";
import Like from "./Like";

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

  renderAnswerField() {
    return (
      <section className="answers">
        <h2>Answers</h2>
        <section className="post-answer">
          <img className="avatar-medium" src="/img/user.png"/>
          <input placeholder="Enter your answer here"/>
        </section>
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
