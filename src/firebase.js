import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXC4vEwLtUZ_vWStNlt6QfWyXXCcqBiIw",
  authDomain: "twitter-clone-65125.firebaseapp.com",
  databaseURL: "https://twitter-clone-65125.firebaseio.com",
  projectId: "twitter-clone-65125",
  storageBucket: "twitter-clone-65125.appspot.com",
  messagingSenderId: "656546104271",
  appId: "1:656546104271:web:890277125c1438db5748ba",
  measurementId: "G-WPGZTNE9DH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
