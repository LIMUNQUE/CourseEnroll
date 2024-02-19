import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKX144hlYvz5NZ31UHxXJC9SLw9RoKAiE",
  authDomain: "apedreeplag-8a5e1.firebaseapp.com",
  projectId: "apedreeplag-8a5e1",
  storageBucket: "apedreeplag-8a5e1.appspot.com",
  messagingSenderId: "174039884152",
  appId: "1:174039884152:web:4d28777843fbbea727688d",
  measurementId: "G-FGHNSS97SE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);