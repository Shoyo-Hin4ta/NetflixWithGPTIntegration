// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACCaFZmftI0hzzBvJaKPnMJd4kpmQmONM",
  authDomain: "netflix-gpt-ace1b.firebaseapp.com",
  projectId: "netflix-gpt-ace1b",
  storageBucket: "netflix-gpt-ace1b.appspot.com",
  messagingSenderId: "79326890116",
  appId: "1:79326890116:web:27111b0a466595d6291ad1",
  measurementId: "G-HMX0668M2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
