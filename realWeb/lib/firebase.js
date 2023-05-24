// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRHNNHGjHQq_oaAcxH8R4IgcmK-6uAXsk",
    authDomain: "dumbestlightproject.firebaseapp.com",
    databaseURL: "https://dumbestlightproject-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dumbestlightproject",
    storageBucket: "dumbestlightproject.appspot.com",
    messagingSenderId: "691378141223",
    appId: "1:691378141223:web:0caf20e1f45ff712b1b602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const realtimeDb = getDatabase(app);

export default app; // Export the app
