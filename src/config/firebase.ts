// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import after we have enabled google auth in firebase website
import { getAuth, GoogleAuthProvider } from 'firebase/auth' 

// to connect our site connected with firestore
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByRWHbUe4yUGf_iqyYbbQQ0_RHW0tRo1I",
    authDomain: "react-course-326ad.firebaseapp.com",
    projectId: "react-course-326ad",
    storageBucket: "react-course-326ad.appspot.com",
    messagingSenderId: "144336151046",
    appId: "1:144336151046:web:cda25aa9389e74f6131987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// added after importing stuff on line 5
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
