import React from "react";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      questionList: [
        {
          id: 1,
          name: 'How do I learn React?',
          link: 'https://www.udacity.com/course/react-nanodegree--nd019',
          media: '/img/udacity.jpeg',
          upvote: 148,
          description: 'Can anyone recommend the Udacity course?',
          user: {
            name: 'Peter Griffin',
            avatar: '/img/peter.jpeg'
          }
        },
        {
          id: 2,
          name: 'What career opportunities does a CS degree offer me?',
          link: 'https://www-cs.stanford.edu/',
          media: '/img/stanford.jpeg',
          upvote: 65,
          description: 'I want to apply at Stanford soon!',
          user: {
            name: 'Lois Griffin',
            avatar: '/img/lois.jpeg'
          }
        }
      ]
    }
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/bg.png" width="100%" />
        </header>

        <section>
          <section className="container">
            <h2>Top Questions</h2>

            <ul className="question-list">
              <li className="question-item">
                <a className="upvote-button" href="#">
                  <span>
                    <i className="fa fa-thumbs-o-up"></i>
                  </span>
                  <br/>
                  {this.state.questionList[0].upvote}
                </a>
                <img className="question-item-media" src={this.state.questionList[0].media} />
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.questionList[0].name}</h2>
                  </a>
                  <p>{this.state.questionList[0].description}</p>
                  <a href="#">
                    <img className="small-avatar" src={this.state.questionList[0].user.avatar} />
                  </a>
                </section>
                <a className="product-item-link" href={this.state.questionList[0].link}>
                  <span>
                    <i className="fa fa-link"></i>
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
