import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHcxpiO4HG6jckoSgPrElcPXPGBqc0_yY",
  authDomain: "vue3-note.firebaseapp.com",
  projectId: "vue3-note",
  storageBucket: "vue3-note.appspot.com",
  messagingSenderId: "990175114074",
  appId: "1:990175114074:web:524099935cfdf8f0737963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}