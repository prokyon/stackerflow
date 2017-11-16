import React from "react";
import Firebase from "firebase";
import ModalWindow from "./ModalWindow";

class LoginModal extends React.Component {
  facebookLogin = () => {
    var provider = new Firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');

    Firebase.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log('Login successfully!', user);
    }).catch(function(error) {
      console.log('Failed!', error);
    });
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
