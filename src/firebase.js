// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZO2LjGLShkWyT0ZOSHaVdASTQwuCZzZM",
  authDomain: "test-9673a.firebaseapp.com",
  projectId: "test-9673a",
  storageBucket: "test-9673a.appspot.com",
  messagingSenderId: "909946110228",
  appId: "1:909946110228:web:371b791f3d4aefc32cc201",
  measurementId: "G-K2HYCC420V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);