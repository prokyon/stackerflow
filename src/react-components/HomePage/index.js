import React from "react";
import QuestionList from "../Question/QuestionList";

class HomePage extends React.Component {
  constructor() {
    super();

    // dummy data
    this.state = {
      questionList: [
        {
          id: 1,
          name: 'How do I learn React?',
          link: 'https://www.udacity.com/course/react-nanodegree--nd019',
          media: '/img/udacity.png',
          likes: 148,
          description: 'Can anyone recommend the Udacity course?',
          user: {
            name: 'Peter Griffin',
            avatar: '/img/peter.jpg'
          }
        },
        {
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
            {
              this.state.questionList
              ?
              <QuestionList questionList={this.state.questionList}/>
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
