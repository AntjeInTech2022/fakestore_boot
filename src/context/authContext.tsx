import { createContext, useState, useEffect, useContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider, 
  signInWithPopup,
  updateProfile
} from "firebase/auth"
import {auth, db} from "./firebase"
import { doc, setDoc } from "firebase/firestore"; 

// 1. Create Context / Store
export const AuthContext = createContext({});


// 2. Create the provider
export const AuthContextProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
// export const AuthContextProvider = (props) => {

  // 3.  states and functions
  // const [user, setUser] = useState(null)
  const [user, setUser] = useState<intfUserData | null>(null);
  
  
 // GOOGLE AUTH
 const provider = new GoogleAuthProvider();

 const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential: any = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user: any= result.user;
    // const user = result.user;
    setUser(user)
    return true
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    return false
    // ...
  });
};



  // REGISTRATION
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      const user: any = userCredential.user;
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
  const logIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user: any = userCredential.user;
    console.log('who signed in?',user)
    setUser(user)
    return true
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('login error',errorMessage)
    return false
  })};

 
   // Get the currently signed-in user
   const loginStatus = () => {
   onAuthStateChanged(auth, (user: any) => {
    
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
        const user: any = userCredential.user;
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


   // UPDATE PROFILE
  // const updateProfile = (name: string, photo: string) => {
  //   updateProfile(user, {
  //     displayName: {name}, photoURL: {photo}
  //   }).then(() => {
  //     // Profile updated!
      // ...
    // }).catch((error) => {
      // An error occurred
      // ...
    // });


  // }

  // 4. return the provider with its value and inject children component


  return <AuthContext.Provider 
  value={{ user, setUser, createUser, logIn, logOut, handleSwitchOnOff, updateProfile, signInWithGoogle }}>
    {props.children}
    </AuthContext.Provider>;
};

