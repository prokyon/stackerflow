import React from "react";
import Firebase from "firebase";
import QuestionList from "../Question/QuestionList";

const config = require("../../../config/config");

const firebase_config = {
    apiKey: config.firebase.apiKey,
    authDomain: config.firebase.authDomain,
    databaseURL: config.firebase.databaseURL,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId
};

Firebase.initializeApp(firebase_config);

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      questionList: []
    }

    Firebase.database().ref("questions").on("value", (snapshot) => {
      var questions = snapshot.val();

      this.setState({
        questionList: questions
      })
    });
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
