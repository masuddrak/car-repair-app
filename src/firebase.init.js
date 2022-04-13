import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2ZF8E7A7PTSdXCJ_59jALryB8MJyXLf0",
  authDomain: "car-repair-app-b25ec.firebaseapp.com",
  projectId: "car-repair-app-b25ec",
  storageBucket: "car-repair-app-b25ec.appspot.com",
  messagingSenderId: "278567054732",
  appId: "1:278567054732:web:5176e68f6d4977d873baa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;