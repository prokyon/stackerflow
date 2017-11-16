import React from "react";
import LoginModal from "./LoginModal";
import PostQuestionModal from "./PostQuestionModal";
import ProfileDropDownMenu from "./ProfileDropDownMenu";

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
        {
          this.props.user
          ?
          // User logged in
          <section>
            <span>
              <a href="#" onClick={this.showLoginModal} className="login-button">Create Question</a>
              <ProfileDropDownMenu/>
            </span>
            <PostQuestionModal status={this.state.modalStatus} hideLoginModal={this.hideLoginModal}/>
          </section>
          :
          // User logged out
          <section>
            <a href="#" onClick={this.showLoginModal} className="login-button">Login</a>
            <LoginModal status={this.state.modalStatus} hideLoginModal={this.hideLoginModal}/>
          </section>
        }
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
