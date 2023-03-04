import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
 import {getAuth} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAqXPz7xTrwL0-U1VV6bCt8qT_7XMgh-lQ",
    authDomain: "fir-auth-4d899.firebaseapp.com",
    projectId: "fir-auth-4d899",
    storageBucket: "fir-auth-4d899.appspot.com",
    messagingSenderId: "438989622258",
    appId: "1:438989622258:web:3bfbac0c2b842b3a0d796b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};