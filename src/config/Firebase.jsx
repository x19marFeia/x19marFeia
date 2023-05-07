// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZe7JFP1fgLvRLI52WxrXmXm4bu2gcPYM",
  authDomain: "signinrr-e6461.firebaseapp.com",
  projectId: "signinrr-e6461",
  storageBucket: "signinrr-e6461.appspot.com",
  messagingSenderId: "562414413591",
  appId: "1:562414413591:web:58591078d1d99262f5b952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)