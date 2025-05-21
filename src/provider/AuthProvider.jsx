import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase_init";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userdata, setuserdata] = useState([]);

  function createUser(e, name, url, email, password) {
    e.preventDefault();
    //console.log(name, url, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setuserdata(res.user);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, (user) => {
      setuserdata(user);
      console.log(user);
    });

    return () => {
      unsubs();
    };
  }, []);
  // function signout
  function signout(e) {
    e.preventDefault();
    console.log("Hello");
    signOut(auth)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  // function signIN

  function signin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((error) => {console.log(error);
        alert(error.code)
      });
  }

  const authInfo = { createUser, signout, userdata, signin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
