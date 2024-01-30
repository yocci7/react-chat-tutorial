import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAewVH9L5kKguQasPMAXrfVXLLQ3h8wo98",
    authDomain: "fir-chat-tutorial-dffb4.firebaseapp.com",
    projectId: "fir-chat-tutorial-dffb4",
    storageBucket: "fir-chat-tutorial-dffb4.appspot.com",
    messagingSenderId: "211146909096",
    appId: "1:211146909096:web:fdb54e41d977a8bfa9e99d",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};
