import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBsh_QNQB90swqA_8-QKzvR29gNFP8Pw5M",
    authDomain: "fir-tutorial-a70e5.firebaseapp.com",
    projectId: "fir-tutorial-a70e5",
    storageBucket: "fir-tutorial-a70e5.appspot.com",
    messagingSenderId: "328246105220",
    appId: "1:328246105220:web:131593225818b67fc19ed1",
    measurementId: "G-7K03SSJGDV"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)