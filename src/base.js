import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyAXPHile31dGsqlxLAjQQSv-43kAtNIp3c",
  authDomain: "codelab-slack.firebaseapp.com",
  projectId: "codelab-slack",
  storageBucket: "codelab-slack.appspot.com",
  messagingSenderId: "737969860189",
  appId: "1:737969860189:web:cb8150b1b170a79ab3a7b4",
});

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
