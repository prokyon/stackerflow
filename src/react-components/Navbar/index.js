import React from "react";
import ModalWindow from "./ModalWindow";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      modalStatus: false
    }
  }

  showLoginModal = () => {
    this.setState({modalStatus: true});
  };

  hideLoginModal = () => {
    this.setState({modalStatus: false});
  };

  renderStackerFlowLogo() {
    return (
      <section className="left">
        <a href="#">
          <img className="logo" src="/img/stackerflow_logo.png"/>
        </a>
      </section>
    );
  }

  renderSearch() {
    return (
      <section className="center">
        <input className="question-search" placeholder="Search..." />
      </section>
    );
  }

  renderCurrentUser() {
    return (
      <section className="right">
        <a href="#" onClick={this.showLoginModal} className="login-button">Login</a>
      </section>
    );
  }

  render() {
    return (
      <section>
        <section className="navbar">
          {this.renderStackerFlowLogo()}
          {this.renderSearch()}
          {this.renderCurrentUser()}
        </section>
        <ModalWindow status={this.state.modalStatus} hideLoginModal={this.hideLoginModal}/>
      </section>
    );
  }
}

export default Navbar;
