import { createContext, useState } from "react";

const testUser = {name: "Tester1",
email: "tester@test.com"}

// 1. Create Context
// const MyContext = React.createContext(defaultValue);
export const AuthContext = createContext();


// 2. Create the provider
// <MyContext.Provider value={/* some value */}>

export const AuthContextProvider = (props) => {

  // 3.  state and function
  const [user, setUser] = useState()
  console.log('who is testing?', user)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log('is user logged in?', isLoggedIn)

  const handleSwitchOnOff = () => {
    	setIsLoggedIn(!isLoggedIn)
      setUser(testUser)
      // !isLoggedIn = reverting the state
 }

  // 4. return the provider with its value and inject children component

  return <AuthContext.Provider value={{ user, isLoggedIn, handleSwitchOnOff }}>{props.children}</AuthContext.Provider>;
};