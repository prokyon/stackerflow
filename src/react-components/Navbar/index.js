import React from "react";

class Navbar extends React.Component {
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
        <a href="#" className="login-button">Login</a>
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
      </section>
    );
  }
}

export default Navbar;
