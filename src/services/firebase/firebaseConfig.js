import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY6wo-uUMAqK8FQtjA_LSl8JH9kJwrUVA",
  authDomain: "react-js-basso-charrauy.firebaseapp.com",
  projectId: "react-js-basso-charrauy",
  storageBucket: "react-js-basso-charrauy.appspot.com",
  messagingSenderId: "191441828863",
  appId: "1:191441828863:web:a11171bf6ecd5a2eddc5ca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)