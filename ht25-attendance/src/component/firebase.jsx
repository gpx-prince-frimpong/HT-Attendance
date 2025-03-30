// firebase.js (inside src/component/)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOTHcAI9iOeDFpvBLqkQazoXeROd6dpv8",
  authDomain: "heavenly-tunes.firebaseapp.com",
  projectId: "heavenly-tunes",
  storageBucket: "heavenly-tunes.firebasestorage.app",
  messagingSenderId: "354246290418",
  appId: "1:354246290418:web:020c9220da1d8f4814996b",
  measurementId: "G-54RRNBC45Q",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance
export { db };
