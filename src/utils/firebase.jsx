// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6gEPttKbIGEuSVC0Z7Jsgdd5qqAM_7Qo",
  authDomain: "netflix-gpt-94c37.firebaseapp.com",
  projectId: "netflix-gpt-94c37",
  storageBucket: "netflix-gpt-94c37.firebasestorage.app",
  messagingSenderId: "855001868615",
  appId: "1:855001868615:web:985e1b6b61eb3bc7500462",
  measurementId: "G-GN03C3P4R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);