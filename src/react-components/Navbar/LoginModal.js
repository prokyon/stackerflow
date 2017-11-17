import React from "react";
import ModalWindow from "./ModalWindow";
import Actions from "../../actions";

class LoginModal extends React.Component {
  facebookLogin = () => {
    Actions.login();
    this.props.hideModal();
  };

  render() {
    return (
      <ModalWindow  {...this.props} style="login-modal">
        <img src="/img/stackerflow_logo.png"/>
        <h1>Learn, Share, Build</h1>
        <p>Create your StackerFlow account. It is free and only takes a minute.</p>

        <button className="facebook-button" onClick={this.facebookLogin}>
          Sign in with Facebook
        </button>
      </ModalWindow>
    );
  }
}

export default LoginModal;
