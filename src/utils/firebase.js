// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNXsQbyaeZ3R3-1RzLSs9KxI9KCUy_41Y",
  authDomain: "cinemate-3935d.firebaseapp.com",
  projectId: "cinemate-3935d",
  storageBucket: "cinemate-3935d.appspot.com",
  messagingSenderId: "330211297788",
  appId: "1:330211297788:web:93ba20a984b79b37a54a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();