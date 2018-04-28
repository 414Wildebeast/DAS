import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCE-M2i6yIC83r7QpjH6Bg0VCMHSp79cYQ",
  authDomain: "disasteralertsystem.firebaseapp.com",
  databaseURL: "https://disasteralertsystem.firebaseio.com",
  projectId: "disasteralertsystem",
  storageBucket: "disasteralertsystem.appspot.com",
  messagingSenderId: "584233126097"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
