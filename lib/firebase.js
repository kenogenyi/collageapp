// lib/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3__eBNoCiBfbv_MH0GdGG_eA3HNNsnUE",
  authDomain: "student-connect-app-289d3.firebaseapp.com",
  projectId: "student-connect-app-289d3",
  storageBucket: "student-connect-app-289d3.appspot.com",
  messagingSenderId: "215457441872",
  appId: "1:215457441872:web:7b99e49f4f1c757f524955",
  measurementId: "G-GEVSQK0NZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);