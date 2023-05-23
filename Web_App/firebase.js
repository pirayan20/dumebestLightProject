import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBRHNNHGjHQq_oaAcxH8R4IgcmK-6uAXsk",
  authDomain: "dumbestlightproject.firebaseapp.com",
  databaseURL: "https://dumbestlightproject-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dumbestlightproject",
  storageBucket: "dumbestlightproject.appspot.com",
  messagingSenderId: "691378141223",
  appId: "1:691378141223:web:0caf20e1f45ff712b1b602"
};

const firebase = initializeApp(firebaseConfig);

module.exports(firebase);