// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDhzNAE-clagEFXe1S_2RJ3eH-2j_UIys",
  authDomain: "ec-grocery.firebaseapp.com",
  projectId: "ec-grocery",
  storageBucket: "ec-grocery.firebasestorage.app",
  messagingSenderId: "241353487578",
  appId: "1:241353487578:web:8f3f668e8284937c8261e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
