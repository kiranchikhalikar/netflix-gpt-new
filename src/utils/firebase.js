// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChP62v76RRLGTH4gi0BwaLZwTRy_ZZ5Cg",
  authDomain: "movies-gpt-60c90.firebaseapp.com",
  projectId: "movies-gpt-60c90",
  storageBucket: "movies-gpt-60c90.appspot.com",
  messagingSenderId: "973646624010",
  appId: "1:973646624010:web:8749f144410426145536f3",
  measurementId: "G-P397NM68FG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
