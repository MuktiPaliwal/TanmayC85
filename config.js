import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyANxPy6XJNMS0Wj5_l_Ivw3GatgrupvpOA",
    authDomain: "booksanta-2a692.firebaseapp.com",
    projectId: "booksanta-2a692",
    storageBucket: "booksanta-2a692.appspot.com",
    messagingSenderId: "272376539309",
    appId: "1:272376539309:web:c5b0f54a7b8e5652547e24"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
