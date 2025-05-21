// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8EO5XzA20WbfjYrozN00fuF8CTDU5h8w",
  authDomain: "dragon-news-350e9.firebaseapp.com",
  projectId: "dragon-news-350e9",
  storageBucket: "dragon-news-350e9.firebasestorage.app",
  messagingSenderId: "572234490413",
  appId: "1:572234490413:web:c28fde2fcc88b2c6dc0ea4",
  measurementId: "G-KMYR43BNC4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;
