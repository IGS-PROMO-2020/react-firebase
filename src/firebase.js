import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD_b0wpZQ7BdAdBL_m0tyTF6VFp27pUWrQ",
  authDomain: "igsreactfirebase.firebaseapp.com",
  databaseURL: "https://igsreactfirebase.firebaseio.com",
  projectId: "igsreactfirebase",
  storageBucket: "igsreactfirebase.appspot.com",
  messagingSenderId: "223134878357",
  appId: "1:223134878357:web:5daa2af2240b177737a99c",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
