import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe4WkGNEf9FAENjytFXSMcrNiZ4PSwk9k",
  authDomain: "auth-production-87e62.firebaseapp.com",
  projectId: "auth-production-87e62",
  storageBucket: "auth-production-87e62.appspot.com",
  messagingSenderId: "989824657472",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
