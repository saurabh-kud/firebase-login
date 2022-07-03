import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const Authcontext = createContext({});

export function AuthContexProvider({ children }) {
  const [user, setUser] = useState();

  function Signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Authcontext.Provider value={{ user, Signup }}>
      {children}
    </Authcontext.Provider>
  );
}

export function useUserAuth() {
  return useContext(Authcontext);
}
