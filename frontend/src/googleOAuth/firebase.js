// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "taskmanager-656fd.firebaseapp.com",
  projectId: "taskmanager-656fd",
  storageBucket: "taskmanager-656fd.appspot.com",
  messagingSenderId: "154181427338",
  appId: "1:154181427338:web:464a0b5720404b5d4c0d73",
  measurementId: "G-B6S6L8LZSK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
