// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC00YPnGlLidyF2RZUWw0GgY0v5pOi2Itg",
  authDomain: "flashcardsaas-1c3e0.firebaseapp.com",
  projectId: "flashcardsaas-1c3e0",
  storageBucket: "flashcardsaas-1c3e0.appspot.com",
  messagingSenderId: "1084795318566",
  appId: "1:1084795318566:web:5918b1416238ce3fc691e7",
  measurementId: "G-1ETKEMLF66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}