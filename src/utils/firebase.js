// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACVp_ZHNlwdgC4IthYpXN1kQI2cvoiuio",
  authDomain: "strammer-338dc.firebaseapp.com",
  projectId: "strammer-338dc",
  storageBucket: "strammer-338dc.appspot.com",
  messagingSenderId: "428255280240",
  appId: "1:428255280240:web:4d6ee57da1f7055fab08b5",
  measurementId: "G-BRRCK2RZSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
