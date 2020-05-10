import firebase from 'firebase';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "myapp-52507.firebaseapp.com",
  databaseURL: "https://myapp-52507.firebaseio.com",
  projectId: "myapp-52507",
  storageBucket: "myapp-52507.appspot.com",
  messagingSenderId: "885886213484",
  appId: "1:885886213484:web:7726ebfdcf4a07d0962749"
})

const db = firebase.firestore();
const auth = firebase.auth();

export {
  auth,
  db
}