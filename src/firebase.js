// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL2Myx-Qk7wLb-D-FXK2DmLZddGfAAyyE",
  authDomain: "financely-rec-952ce.firebaseapp.com",
  projectId: "financely-rec-952ce",
  storageBucket: "financely-rec-952ce.appspot.com",
  messagingSenderId: "542210778924",
  appId: "1:542210778924:web:835c484b49bdfef4d66e89",
  measurementId: "G-0YBXWTYDK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };