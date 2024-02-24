// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcjgMo9Lpz_n1GLXTmRcbfASRsWq97HRc",
    authDomain: "netflixgpt-e9460.firebaseapp.com",
    projectId: "netflixgpt-e9460",
    storageBucket: "netflixgpt-e9460.appspot.com",
    messagingSenderId: "940768553085",
    appId: "1:940768553085:web:87d7385e8ee9345af56914",
    measurementId: "G-VCR2GKG66Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();