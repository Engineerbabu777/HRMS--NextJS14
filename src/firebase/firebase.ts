// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fir-tutorial-21ff5.firebaseapp.com",
  projectId: "fir-tutorial-21ff5",
  storageBucket: "fir-tutorial-21ff5.appspot.com",
  messagingSenderId: "880808850879",
  appId: "1:880808850879:web:a5dc36534739c586275d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);


export {app, storage};

