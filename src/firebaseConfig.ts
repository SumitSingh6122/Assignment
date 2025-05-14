// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARnoyHkAQOKmBxn3JxjTbGs78aAm8vE6I",
  authDomain: "fir-web-app-9c94a.firebaseapp.com",
  projectId: "fir-web-app-9c94a",
  storageBucket: "fir-web-app-9c94a.firebasestorage.app",
  messagingSenderId: "966398388663",
  appId: "1:966398388663:web:c57b1aec824b83b1992032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);