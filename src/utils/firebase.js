// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFyrafDyLfUhsRFnGTxr9MkKTL3gljvbg",
  authDomain: "hive-de78d.firebaseapp.com",
  projectId: "hive-de78d",
  storageBucket: "hive-de78d.appspot.com",
  messagingSenderId: "840366352624",
  appId: "1:840366352624:web:7a53e062b10021b9447a35",
  measurementId: "G-DCW5VSNV8N",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebase);
const firebaseAuthProvider = new GoogleAuthProvider();

export { firebase, firebaseAuth, firebaseAuthProvider };
