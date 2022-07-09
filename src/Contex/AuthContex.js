import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const Authcontext = createContext({});

export function AuthContexProvider({ children }) {
  const [user, setUser] = useState();

  function Signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function LogOut() {
    return signOut(auth);
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
    <Authcontext.Provider value={{ user, Signup, login, LogOut }}>
      {children}
    </Authcontext.Provider>
  );
}

export function useUserAuth() {
  return useContext(Authcontext);
}
