import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr9sXyIuE8IskXg6NnYvur6vbWMPWQEJQ",
  authDomain: "product-6fe05.firebaseapp.com",
  projectId: "product-6fe05",
  storageBucket: "product-6fe05.firebasestorage.app",
  messagingSenderId: "396254844535",
  appId: "1:396254844535:web:faa14d87bbb87be58c5872",
  measurementId: "G-C0H1ZLZM3J"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };