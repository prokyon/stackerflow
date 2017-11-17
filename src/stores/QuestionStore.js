import alt from "../alt";
import Actions from "../actions";
import {decorate, bind} from "alt-utils/lib/decorators";

@decorate(alt) // ES7 syntax
class QuestionStore {
  constructor() {
    this.state = {
      user: null,
      questions: [],
      answers: []
    };
  }

  @bind(Actions.login, Actions.initSession, Actions.logout)
  setUser(user) {
    this.setState({user: user});
  }

  @bind(Actions.getAnswers)
  getAnswers(answers) {
    this.setState({answers: answers});
  }
}

export default alt.createStore(QuestionStore);
