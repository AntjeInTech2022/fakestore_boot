import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import {auth} from "./firebase"

// 1. Create Context / Store
export const AuthContext = createContext();


// 2. Create the provider
export const AuthContextProvider = (props) => {

  // 3.  states and functions
  const [user, setUser] = useState(null)
  console.log('anybody loged in?', user)

  const createUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('user',user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('createUser error',errorMessage)
    });
  }
 

  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // console.log('is user logged in?', isLoggedIn)

  // const testUser = {
  //   user_name: "Tester",
  //   email: "tester@test.com"}

  // const handleSwitchOnOff = () => {
  //   	setIsLoggedIn(!isLoggedIn)
  //     setUser(testUser) }
      // !isLoggedIn = reverting the state

    
  // 4. return the provider with its value and inject children component

  return <AuthContext.Provider 
  value={{ user, setUser, createUser }}>
    {props.children}
    </AuthContext.Provider>;
};