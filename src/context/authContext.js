import { createContext, useState } from "react";

// 1. Create Context
// const MyContext = React.createContext(defaultValue);
export const AuthContext = createContext();


// 2. Create the provider
// <MyContext.Provider value={/* some value */}>

export const AuthContextProvider = (props) => {
  // 3.  state and function
  const [user, setUser] = useState("Tester")
  console.log('who is testing?', user)

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // setUser(user)
  // setIsLoggedIn(false)

  // 4. return the provider with its value and inject children component

  return <AuthContext.Provider value={{ user, isLoggedIn }}>{props.children}</AuthContext.Provider>;
};