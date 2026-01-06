// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBnT9sU_voGlLa3LRIMshbMtuvQcjBdYY",
  authDomain: "react-pos-c92e9.firebaseapp.com",
  projectId: "react-pos-c92e9",
  storageBucket: "react-pos-c92e9.firebasestorage.app",
  messagingSenderId: "298517961508",
  appId: "1:298517961508:web:8be2b61b4c3c9e3c5231b1",
  measurementId: "G-44SFS7G7Q9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app);