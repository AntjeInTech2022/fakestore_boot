import { createContext, useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import {auth, db} from "./firebase"
import { doc, setDoc } from "firebase/firestore"; 

// 1. Create Context / Store
export const AuthContext = createContext();


// 2. Create the provider
export const AuthContextProvider = (props) => {

  // 3.  states and functions
  const [user, setUser] = useState(null)
  

  // REGISTRATION
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const userDocRef = doc(db, "users", user.uid);
      setDoc(userDocRef, {wishlist:[]})
      setUser(user)
      console.log('new user is',user)
      // ...
      return true
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('createUser error',errorMessage)
      return false
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

 
   // Get the currently signed-in user
   const loginStatus = () => {
   onAuthStateChanged(auth, (user) => {
    
    if (user) {
      console.log('user status changed:', user)
      setUser(user) // register and login at the same time
      const uid = user.uid;
      // ...
    } else {
      setUser(null)
      // User is signed out
      // ...
    }
  })};

  // Detect auth state
// onAuthStateChanged(auth, user => {
//   if(user !== null) {
//     console.log('logged in')
//   } else {
//     console.log('no user')
//   }
// });


  useEffect(() => {
    loginStatus();
  },[]);

  // LOGOUT
  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful')
      setUser(null) //client logout
    }).catch((error) => {
      // An error happened.
      console.log('sign out error',error)
    });
  }
 
  // TEST USER
  const guest = {
  email: "guest@fakestore.com",
  password: "fakeguest"};


  const handleSwitchOnOff = () => {


  //IF there is no user signed in
  if (!user) {
    return(
      // logIn(guest.email, guest.password),
      // console.log('A guest has signed in')
      signInWithEmailAndPassword(auth, guest.email, guest.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('A guest has signed in',user)
        setUser(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('login error',errorMessage)
      })
     )
    }
  }

 // 


    
  // 4. return the provider with its value and inject children component
  console.log('A guest has signed in',user)

  return <AuthContext.Provider 
  value={{ user, setUser, createUser, logIn, logOut, handleSwitchOnOff }}>
    {props.children}
    </AuthContext.Provider>;
};

