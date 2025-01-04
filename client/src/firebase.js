// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reelestate-d3fcc.firebaseapp.com",
  projectId: "reelestate-d3fcc",
  storageBucket: "reelestate-d3fcc.firebasestorage.app",
  messagingSenderId: "813892491923",
  appId: "1:813892491923:web:2cc0b2421413bbf16b4b66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);