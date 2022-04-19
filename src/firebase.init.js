// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxaXc4yCq2NEVZkepMrEiiAHqyRFhVwHk",
    authDomain: "arstudio-2902c.firebaseapp.com",
    projectId: "arstudio-2902c",
    storageBucket: "arstudio-2902c.appspot.com",
    messagingSenderId: "336787896752",
    appId: "1:336787896752:web:df0534768433141e96fe75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;