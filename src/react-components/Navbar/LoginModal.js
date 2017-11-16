import React from "react";
import ModalWindow from "./ModalWindow";

class LoginModal extends React.Component {
  render() {
    return (
      <ModalWindow  {...this.props} style="login-modal">
        <img src="/img/stackerflow_logo.png"/>
        <h1>Learn, Share, Build</h1>
        <p>Create your StackerFlow account. It is free and only takes a minute.</p>

        <button className="facebook-button">
          Sign in with Facebook
        </button>
      </ModalWindow>
    );
  }
}

export default LoginModal;
