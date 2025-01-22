// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1LYvCUadKySN7bxPmYWGCILiN5dcQ5Tg",
  authDomain: "gptnetflix-afaa6.firebaseapp.com",
  projectId: "gptnetflix-afaa6",
  storageBucket: "gptnetflix-afaa6.firebasestorage.app",
  messagingSenderId: "563276033506",
  appId: "1:563276033506:web:3a4300a6664445fcb89dbb",
  measurementId: "G-C71CGHBXGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);