import { createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {auth} from "./firebase"

// 1. Create Context
// export const AuthContext = createContext();
const UserContext = createContext();
export const UserAuth = () => {
    return useContext(UserContext);
};

// 2. Create the provider
export const AuthContextProvider2 = ({children}) => {
    // children same as props

    // 3.  states and functions
    const [user, setUser] = useState({}); // ({}) <- is an object

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log('is user logged in?', isLoggedIn)


    // TEST USER
    const testUser = {
        fname: "Tester",
        lname: "Faker",
        email: "tester@test.com"}


    const handleSwitchOnOff = () => {
    	setIsLoggedIn(!isLoggedIn)
        setUser(testUser)
      // !isLoggedIn = reverting the state
 }

    
    // REGISTRATION
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // LOGIN
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // LOGOUT
    const logout = () => {
        return signOut(auth)
    };

    //unsubscription
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
            console.log('currentUser',currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // 4. return the provider with its value and inject children component
    return(
        <UserContext.Provider value={{createUser, user, logout, signIn, isLoggedIn, handleSwitchOnOff}}>
            {children}
        </UserContext.Provider>
    )
}


