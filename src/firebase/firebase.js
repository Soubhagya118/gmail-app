import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_66W2edDBsPdwbZ0MY4awi3eSitIi4qU",
  authDomain: "mail-dec.firebaseapp.com",
  databaseURL: "https://mail-dec-default-rtdb.firebaseio.com",
  projectId: "mail-dec",
  storageBucket: "mail-dec.appspot.com",
  messagingSenderId: "534234301910",
  appId: "1:534234301910:web:e6674045d8af1c9f301077"
};

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);

  const provider = new GoogleAuthProvider();


  export {db,auth,provider}