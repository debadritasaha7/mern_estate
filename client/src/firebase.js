// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-851a4.firebaseapp.com",
  projectId: "mern-estate-851a4",
  storageBucket: "mern-estate-851a4.appspot.com",
  messagingSenderId: "356738639319",
  appId: "1:356738639319:web:10566b4bab1d5825a51792"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);