import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Yx67Vt9-QFWLO5-YGA6ht7F4BO1e1G8",
  authDomain: "hulu-598a2.firebaseapp.com",
  projectId: "hulu-598a2",
  storageBucket: "hulu-598a2.appspot.com",
  messagingSenderId: "48349169969",
  appId: "1:48349169969:web:06e26f60ddfee75a8a8810",
  measurementId: "G-30722HZWHB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
