import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDb6BswC1vlUilALNzvAzTrafQCP1DiiDA",
  authDomain: "clone-92dfb.firebaseapp.com",
  databaseURL: "https://clone-92dfb.firebaseio.com",
  projectId: "clone-92dfb",
  storageBucket: "clone-92dfb.appspot.com",
  messagingSenderId: "141744643378",
  appId: "1:141744643378:web:fa26fd096a5dd594e88b2b",
  measurementId: "G-C8H0CGS1JS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
