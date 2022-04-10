import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

  const firebaseConfig = {
    apiKey: "AIzaSyDAUUXjtvc0-dal0SjZUbknNnf793azSvk",
    authDomain: "fir-tutorial-2-5267c.firebaseapp.com",
    projectId: "fir-tutorial-2-5267c",
    storageBucket: "fir-tutorial-2-5267c.appspot.com",
    messagingSenderId: "586035668049",
    appId: "1:586035668049:web:5ae76d10e5f9dd2c078470",
    measurementId: "G-9PWBNF8S07"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)