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

  // REGISTRATION
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('new user is',user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('createUser error',errorMessage)
    })};
  

  // LOGIN
  const logIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('who signed in?',user)
    setUser(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('login error',errorMessage)
  })};

 // UPDATE PROFILE
//  const updateProfile = (email, password) => {
// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// })};
 

  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // console.log('is user logged in?', isLoggedIn)

  // const testUser = {
  //   displyName: "Tester",
  //   email: "tester@test.com"}

  // const handleSwitchOnOff = () => {
  //   	setIsLoggedIn(!isLoggedIn)
  //     setUser(testUser) }
      // !isLoggedIn = reverting the state

    
  // 4. return the provider with its value and inject children component

  return <AuthContext.Provider 
  value={{ user, setUser, createUser, logIn }}>
    {props.children}
    </AuthContext.Provider>;
};