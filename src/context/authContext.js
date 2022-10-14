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

  // 3.  state and function
  const [user, setUser] = useState()
  console.log('who is testing?', user)

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
  value={{ user, setUser }}>
    {props.children}
    </AuthContext.Provider>;
};