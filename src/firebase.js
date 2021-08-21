import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1qx138ufVL867-dlo0kLksnaVxQUCpWY",
  authDomain: "my-157f3.firebaseapp.com",
  projectId: "my-157f3",
  storageBucket: "my-157f3.appspot.com",
  messagingSenderId: "88740487554",
  appId: "1:88740487554:web:f5cbac68f1e1957e496f9b",
  measurementId: "G-N560GM77S7",
});

const auth = firebase.auth();

 export {auth}