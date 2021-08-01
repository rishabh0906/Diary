import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDky-REtKJHB_zHl26Q1cKEzVg4AarjGkM",
    authDomain: "diary-78db3.firebaseapp.com",
    projectId: "diary-78db3",
    storageBucket: "diary-78db3.appspot.com",
    messagingSenderId: "1061804369824",
    appId: "1:1061804369824:web:92042172f9513a8efd26c5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore();
export const auth=firebase.auth();

let provider=new firebase.auth.GoogleAuthProvider();

export default firebase;
export const SignInWithGoogle=()=>firebase.auth().signInWithPopup(provider);