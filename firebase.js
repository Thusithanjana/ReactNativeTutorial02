// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqXPz7xTrwL0-U1VV6bCt8qT_7XMgh-lQ",
  authDomain: "fir-auth-4d899.firebaseapp.com",
  projectId: "fir-auth-4d899",
  storageBucket: "fir-auth-4d899.appspot.com",
  messagingSenderId: "438989622258",
  appId: "1:438989622258:web:3bfbac0c2b842b3a0d796b"
};

// Initialize Firebase

let app;

if(firebase.apps.length === 0){
    app = initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};
