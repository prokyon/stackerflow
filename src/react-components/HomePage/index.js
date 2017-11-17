import React from "react";
import QuestionList from "../Question/QuestionList";

import connectToStores from "alt-utils/lib/connectToStores";
import QuestionStore from "../../stores/QuestionStore";
import Actions from "../../actions";

@connectToStores
class HomePage extends React.Component {
  constructor() {
    super();
    Actions.getQuestions();
  }

  static getStores() {
    return [QuestionStore];
  }

  static getPropsFromStores() {
    return QuestionStore.getState();
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
              this.props.questions
              ?
              <QuestionList questionList={this.props.questions}/>
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
