import firebase from 'firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
import ReduxSagaFirebase from 'redux-saga-firebase'

const myFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA0cvs3iMLpWnudDmfF6F8_pg6LIqrC3lw",
  authDomain: "redditzilla-8f620.firebaseapp.com",
  databaseURL: "https://redditzilla-8f620.firebaseio.com",
  projectId: "redditzilla-8f620",
  storageBucket: "redditzilla-8f620.appspot.com",
  messagingSenderId: "994737720752",
  appId: "1:994737720752:web:ab5855f42830a9f0019a75",
  measurementId: "G-G7T4CVGJVJ"
});

const firestore = firebase.firestore();

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);

export default reduxSagaFirebase;

export { firebase, firestore }