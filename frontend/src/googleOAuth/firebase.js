// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "taskmanagerassignment.firebaseapp.com",
  projectId: "taskmanagerassignment",
  storageBucket: "taskmanagerassignment.appspot.com",
  messagingSenderId: "328173884065",
  appId: "1:328173884065:web:6eeb453331f8a103b856e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);