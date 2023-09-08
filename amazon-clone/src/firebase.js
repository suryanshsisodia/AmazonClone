// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNGunNrrCVEg3hVk0Uz0GDcQQEQhY-25E",
  authDomain: "clone-44fb9.firebaseapp.com",
  projectId: "clone-44fb9",
  storageBucket: "clone-44fb9.appspot.com",
  messagingSenderId: "676524102673",
  appId: "1:676524102673:web:7d8914689e181f2b440db0",
  measurementId: "G-6DZTNDHKSS"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };