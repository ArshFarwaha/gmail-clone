import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB68hLdwRXip6BDpzIwmIAnKnKn8oVHyhA",
  authDomain: "clone-c3f48.firebaseapp.com",
  projectId: "clone-c3f48",
  storageBucket: "clone-c3f48.appspot.com",
  messagingSenderId: "767423314602",
  appId: "1:767423314602:web:50b59d7d8d3fc71f172ed3",
  measurementId: "G-6LS6Z98VTX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
