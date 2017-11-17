import alt from "../alt";
import Firebase from "firebase";
const config = require("../../config/config");

const firebase_config = {
    apiKey: config.firebase.apiKey,
    authDomain: config.firebase.authDomain,
    databaseURL: config.firebase.databaseURL,
    storageBucket: config.firebase.storageBucket
};

Firebase.initializeApp(firebase_config);

class Actions {
  initSession() {
    return (dispatch) => {
      Firebase.auth().onAuthStateChanged(function(result) {
        var profile = null;

        if (result) {
          profile = {
            id: result.uid,
            name: result.providerData[0].displayName,
            avatar: result.providerData[0].photoURL
          }
        }

        setTimeout(() => dispatch(profile));
      });
    }
  }

  login() {
    return (dispatch) => {
      var provider = new Firebase.auth.FacebookAuthProvider();
      Firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        var profile = {
          id: user.uid,
          name: user.providerData[0].displayName,
          avatar: user.providerData[0].photoURL
        }

        Firebase.database().ref('/users/' + user.uid).set(profile);
        dispatch(profile);
      }).catch(function(error) {
        console.log('Failed!', error);
      });
    }
  }

  logout() {
    return(dispatch) => {
      Firebase.auth().signOut().then(function() {
        setTimeout(() => dispatch(null));
      }, function(error) {
        console.log(error);
      });
    }
  }

  getQuestions() {
    return(dispatch) => {
      Firebase.database().ref('questions').on('value', function(snapshot) {
        var questions = snapshot.val();
        dispatch(questions);
      });
    }
  }
}

export default alt.createActions(Actions);
