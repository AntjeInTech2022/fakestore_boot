import { createContext, useState, useEffect, useContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider, 
  signInWithPopup,
  updateProfile,
  User
} from "firebase/auth"
import {auth, db} from "./firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { Products } from "../@types";


// 1. Create Context / Store
export const AuthContext = createContext({});


// 2. Create the provider
export const AuthContextProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
// export const AuthContextProvider = (props) => {

  // 3.  states and functions
  // const [user, setUser] = useState(null)
  const [user, setUser] = useState< User | null>(null);
  
  
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
  const createUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed in 
      // const user = userCredential.user;
      const user: any = userCredential.user;
      const userDocRef = doc(db, "users", user.uid);
      setDoc(userDocRef, { wishlist: [] });
      setUser(user);
      console.log('new user is', user);
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('createUser error', errorMessage);
      return false;
    }};
  

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

  useEffect(() => {
    loginStatus();
  },[]);

  // Detect auth state
// onAuthStateChanged(auth, user => {
//   if(user !== null) {
//     console.log('logged in')
//   } else {
//     console.log('no user')
//   }
// });

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

//FETCH Wishlist items from firestore
    // const [products, setProducts] = useState<Products|null >(null);
    // const [items, setItems] = useState(null) 
    
  //   const getItems = async () => {

  //   if (user) {
  //   const docRef = doc(db, "users", user.uid);
  //   const docSnap = await getDoc(docRef);
    
  //     if (docSnap.exists()) {
  //       const {wishlist} =  docSnap.data();
  //       console.log("wishlist:", wishlist);
  //       setItems(wishlist);
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //       const userDocRef = doc(db, "users", user.uid);
  //       setDoc(userDocRef, {wishlist:[]})
  //     }
  //  }
  // }

   // UPDATE USER NAME
   const updateName = (name: string | null) => {
    
    if (user !== null) {
    updateProfile(user, {
      displayName: name,
    }).then(() => {
      // Profile updated!
      console.log('username updated to',user.displayName)
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }
}


  
  

  // Get a user's provider-specific profile information
  const showUserInfoInConsole = () => {
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
}


  // 4. return the provider with its value and inject children component
  return <AuthContext.Provider 
  value={{ user, setUser, createUser, logIn, logOut, handleSwitchOnOff, updateName, signInWithGoogle, showUserInfoInConsole}}>
    {props.children}
    </AuthContext.Provider>;
};

