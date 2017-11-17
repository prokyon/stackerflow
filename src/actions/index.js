import alt from "../alt";
import Firebase from "firebase";
import _ from "lodash";

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
        var questionsValue = snapshot.val();
        var questions = _(questionsValue).keys().map((questionKey) => {
          var item = _.clone(questionsValue[questionKey]);
          item.key = questionKey;
          return item;
        })
        .value();
        dispatch(questions);
      });
    }
  }

  addQuestion(question) {
    return (dispatch) => {
      Firebase.database().ref('questions').push(question);
    }
  }

  addLike(questionId, userId) {
    return (dispatch) => {
      var likeCountRef = Firebase.database().ref('likes/' + questionId + '/' + userId);
      var likeRef = Firebase.database().ref('questions/' + questionId + '/likes');

      likeCountRef.on('value', function(snapshot) {
        if(snapshot.val() == null) {
          likeCountRef.set(true);

          var likeCount = 0;
          likeRef.on('value', function(snapshot) {
            likeCount = snapshot.val();
          });
          likeRef.set(likeCount + 1);
        }
       });
    }
  }

  addAnswer(questionId, answer) {
    return (dispatch) => {
      Firebase.database().ref('/answers/' + questionId).push(answer);
    }
  }

  getAnswers(questionId) {
    return (dispatch) => {
      var answerRef = Firebase.database().ref('answers/' + questionId);

      answerRef.on('value', function(snapshot) {
        var answersValue = snapshot.val();
        var answers = _(answersValue).keys().map((answerKey) => {
          var item = _.clone(answersValue[answerKey]);
          item.key = answerKey;
          return item;
        })
        .value();
        
        dispatch(answers);
      });
    }
  }
}

export default alt.createActions(Actions);
