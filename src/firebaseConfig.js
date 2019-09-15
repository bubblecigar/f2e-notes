  // Firebase App (the core Firebase SDK) is always required and must be listed first
  import * as firebase from "firebase/app";

  // Add the Firebase products that you want to use
  import "firebase/auth";
  import "firebase/firestore";
  import "firebase/storage";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAny1czFKbCJFQkTJ-ZBmilKNg2PKW4TMk",
    authDomain: "f2e-notes.firebaseapp.com",
    databaseURL: "https://f2e-notes.firebaseio.com",
    projectId: "f2e-notes",
    storageBucket: "f2e-notes.appspot.com",
    messagingSenderId: "462440924352",
    appId: "1:462440924352:web:9f29b3799311defbaa9925"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
