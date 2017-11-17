import alt from "../alt";
import Firebase from "firebase";

class Actions {

  login() {
    return (dispatch) => {
      var provider = new Firebase.auth.FacebookAuthProvider();
      Firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        dispatch(user);
      }).catch(function(error) {
        console.log('Failed!', error);
      });
    }
  }
}

export default alt.createActions(Actions);
