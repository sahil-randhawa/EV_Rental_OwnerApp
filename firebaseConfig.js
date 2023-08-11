// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxx.firebaseapp.com",
    projectId: "xxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app)

const auth = getAuth(app)

export {db, auth}