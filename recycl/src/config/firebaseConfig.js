// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9crrLTwPb-9FSLvXcCZCI5Y8SDp9qyZE",
  authDomain: "recyclap.firebaseapp.com",
  projectId: "recyclap",
  storageBucket: "recyclap.appspot.com",
  messagingSenderId: "1029470177289",
  appId: "1:1029470177289:web:9ce2bdc7dbf7f7e760d0d8",
  measurementId: "G-SXR1H79D6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

// Initialiser les fournisseurs d'authentification
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Exporter les objets nécessaires
export { auth, googleProvider, facebookProvider };