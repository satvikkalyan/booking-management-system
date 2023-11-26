// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6XNo1WXTGPDwPYIIdRnWJttLR1pOtUV8",
  authDomain: "bms-firebase-16289.firebaseapp.com",
  projectId: "bms-firebase-16289",
  storageBucket: "bms-firebase-16289.appspot.com",
  messagingSenderId: "1008384768964",
  appId: "1:1008384768964:web:2480186b52696df70b4291",
  measurementId: "G-97EQ2FJQ4B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth()
export {auth, firebase}