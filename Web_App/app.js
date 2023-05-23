import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from "./firebase"

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// import { getDatabase,ref,onValue,update,get,set } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyBRHNNHGjHQq_oaAcxH8R4IgcmK-6uAXsk",
//   authDomain: "dumbestlightproject.firebaseapp.com",
//   projectId: "dumbestlightproject",
//   storageBucket: "dumbestlightproject.appspot.com",
//   messagingSenderId: "691378141223",
//   appId: "1:691378141223:web:0caf20e1f45ff712b1b602"
// };

var database = firebase.database();
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Database Paths
var dataFloatPath = "test/brightness";
var dataIntPath = "test/buttonState";
var turnOFFPath = "test/turnOFF";
var check = 0;

// Get a database reference
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);
const turnOFFInt = database.ref(turnOFFPath);

// Variables to save database current values
var floatReading;
var intReading;

// const db = getDatabase();
set(ref(db, "test/"), {
  buttonState: 0,
});

// Attach an asynchronous callback to read the data
databaseFloat.on(
  "value",
  (snapshot) => {
    floatReading = snapshot.val();
    console.log(floatReading);
    document.getElementById("brightness").innerHTML = floatReading;
    if (floatReading <= 25) {
      document.getElementById("sicon").src = "image/moon.png";
    } else {
      document.getElementById("sicon").src = "image/sun.png";
    }
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);


document.getElementById("on-off").addEventListener("click", function onClick() {
  if (check == 0) {
    console.log("test");
    document.getElementById("imgg").src = "image/nolightbut.png";
    check = 1;
    update(ref(db, "test/"), {
      buttonState: 0,
    });
  } else {
    console.log("test2");
    document.getElementById("imgg").src = "image/light-bulb.png";
    check = 0;
    update(ref(db, "test/"), {
      buttonState: 1,
    });
    console.log("test");
  }
});

