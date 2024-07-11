import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJ8Y9LKpzIsrUTIjLGd17EF-vqjtFkuEc",
  authDomain: "reactchatapp-8c0da.firebaseapp.com",
  projectId: "reactchatapp-8c0da",
  storageBucket: "reactchatapp-8c0da.appspot.com",
  messagingSenderId: "550772710107",
  appId: "1:550772710107:web:e6accb32e686f48c608afe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();