import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import connectToStores from "alt-utils/lib/connectToStores";
import QuestionStore from "../stores/QuestionStore";

@connectToStores
class App extends React.Component {
  constructor() {
    super();
  }

  static getStores() {
    return [QuestionStore];
  }

  static getPropsFromStores() {
    return QuestionStore.getState();
  }

  render() {
    return(
      <section>
        <Navbar user={this.props.user}/>
        <HomePage/>
      </section>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
