// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-uolJbma6MG2tXfBYkOZSP_3ZlPpWz5Y",
  authDomain: "coffee-shop-sbduac.firebaseapp.com",
  databaseURL: "https://coffee-shop-sbduac.firebaseio.com",
  projectId: "coffee-shop-sbduac",
  storageBucket: "coffee-shop-sbduac.appspot.com",
  messagingSenderId: "979583663708",
  appId: "1:979583663708:web:8b308bd39f30c93882b099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let rdb = getDatabase(app);

export const realTimeDatabase = rdb;