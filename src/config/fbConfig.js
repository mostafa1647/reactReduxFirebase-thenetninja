import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpYKY7XkYFdVIWxoxaVfHSJk-5RAYHroQ",
    authDomain: "react-redux-firebase-net-ninja.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-net-ninja.firebaseio.com",
    projectId: "react-redux-firebase-net-ninja",
    storageBucket: "react-redux-firebase-net-ninja.appspot.com",
    messagingSenderId: "602520851890",
    appId: "1:602520851890:web:897731aa968f99066040ab",
    measurementId: "G-47RHCRD9SE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();


export default firebase;