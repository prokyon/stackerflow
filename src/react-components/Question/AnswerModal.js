import React from "react";
import ModalWindow from "../Navbar/ModalWindow";

class AnswerModal extends React.Component {
  constructor() {
    super();

    // dummy data
    this.state = {
      question: {
        id: 2,
        name: 'What career opportunities does a CS degree offer me?',
        link: 'https://www-cs.stanford.edu/',
        media: '/img/stanford.jpg',
        likes: 65,
        description: 'I want to apply at Stanford soon!',
        user: {
          name: 'Lois Griffin',
          avatar: '/img/lois.png'
        }
      }
    }
  }

  renderLikeButton() {
    return (
      <a className="like-button" href="#">
        <span>
          <i className="fa fa-thumbs-o-up"></i>
        </span>
        <br/>
        {this.state.question.likes}
      </a>
    );
  }

  renderHeader() {
    return (
      <header style={{backgroundImage: "url(" + this.state.question.media + ")"}}>
        <section className="header-shadow">
          <h1>{this.state.question.name}</h1>
          <p>{this.state.question.description}</p>
          <section>
            {this.renderLikeButton()}
            <a className="visit-link-button" href={this.state.question.link} target="_blank">Visit Link</a>
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
