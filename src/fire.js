import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCE-M2i6yIC83r7QpjH6Bg0VCMHSp79cYQ",
    authDomain: "disasteralertsystem.firebaseapp.com",
    databaseURL: "https://disasteralertsystem.firebaseio.com",
    projectId: "disasteralertsystem",
    storageBucket: "disasteralertsystem.appspot.com",
    messagingSenderId: "584233126097"
};
var fire = firebase.initializeApp(config);
export default fire;