import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNowbD4LIZFj-zYfo-ZQAExQJmi_whgnY",
  authDomain: "auth-dev-c67c5.firebaseapp.com",
  projectId: "auth-dev-c67c5",
  storageBucket: "auth-dev-c67c5.appspot.com",
  messagingSenderId: "545648614863",
  appId: "1:545648614863:web:ebfbb3e7f77503e1a786ba",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
