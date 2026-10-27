import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAuHanTtu-ISuL7HnV2rPiqMnaXU34uoQ",
  authDomain: "summarist-a9655.firebaseapp.com",
  projectId: "summarist-a9655",
  storageBucket: "summarist-a9655.firebasestorage.app",
  messagingSenderId: "202231464321",
  appId: "1:202231464321:web:d1d28463f42632a9766880"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);