import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// import 'firebase/auth'
// import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDH9kSTnVbR2Vt7SYu8QrJX6XMb5UsYtxU",
    authDomain: "movies-b2a06.firebaseapp.com",
    projectId: "movies-b2a06",
    storageBucket: "movies-b2a06.appspot.com",
    messagingSenderId: "592050564426",
    appId: "1:592050564426:web:a796eb7c7b9f2fb1cae5b3",
    measurementId: "${config.measurementId}"
};

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth();
export const db = getFirestore();

