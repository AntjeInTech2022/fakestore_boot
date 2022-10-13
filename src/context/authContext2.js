import { createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,signOut, 
    onAuthStateChanged
} from "firebase/auth"
import {auth} from "../firebase"

const UserContext = createContext();

export const AuthContextProvider2 = ({children}) => {
    const [user, setUser] = useState({});
    // ({}) <- is an object
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    };

    const logout = () => {
        return signOut()
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return(
        <UserContext.Provider value={{createUser, user}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
};