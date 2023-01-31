// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "alternativo-7a20e.firebaseapp.com",
    projectId: "alternativo-7a20e",
    storageBucket: "alternativo-7a20e.appspot.com",
    messagingSenderId: "312366491723",
    appId: "1:312366491723:web:510ecb6c61d74d01f545ce",
    databaseURL: "https://alternativo-7a20e-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const db = getDatabase(appFirebase);
export const refDb = (a, b) => {
    return ref(a, b);
};