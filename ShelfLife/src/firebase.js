import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBotA4v7sRg4jKnLY76wi2AX1zqUBSgbPE",
  authDomain: "shelflife-2ad24.firebaseapp.com",
  projectId: "shelflife-2ad24",
  storageBucket: "shelflife-2ad24.firebasestorage.app",
  messagingSenderId: "412584124004",
  appId: "1:412584124004:web:043f5811fcc55e1b03c971",
  measurementId: "G-70L3GGB0K8"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const googleProvider =
  new GoogleAuthProvider();

export const db = getFirestore(app);
