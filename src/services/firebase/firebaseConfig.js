import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPFkJnXSKOd_rADWDuji0SSLya386Trjk",
  authDomain: "pipes-6cafa.firebaseapp.com",
  projectId: "pipes-6cafa",
  storageBucket: "pipes-6cafa.firebasestorage.app",
  messagingSenderId: "877146509188",
  appId: "1:877146509188:web:a4664087d729583ddc97d1",
  measurementId: "G-B94NY88GCB",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
