// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAKsE9oYlVyeWy3Zb6vW0OPvrr0V3Co2U",
  authDomain: "clase--14.firebaseapp.com",
  projectId: "clase--14",
  storageBucket: "clase--14.appspot.com",
  messagingSenderId: "635560055815",
  appId: "1:635560055815:web:2de44507287966906a46a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
