import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCs1gL5JXTEB809GKbqPNLlwUYrD7QE5B8",
    authDomain: "topicos2-68251.firebaseapp.com",
    projectId: "topicos2-68251",
    storageBucket: "topicos2-68251.appspot.com",
    messagingSenderId: "935537567016",
    appId: "1:935537567016:web:7489aefbba3f85af611c1d"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export{db}