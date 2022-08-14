// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSH6M35JNnNYKYFKBNG9KGYU-2fUbtLqM",
  authDomain: "ecommerces-7fa72.firebaseapp.com",
  projectId: "ecommerces-7fa72",
  storageBucket: "ecommerces-7fa72.appspot.com",
  messagingSenderId: "294067314179",
  appId: "1:294067314179:web:fa98210d65f5bf18cb7836",
  measurementId: "G-BSVZ052KLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);