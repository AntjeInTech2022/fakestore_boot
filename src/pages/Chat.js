import React from 'react'
import LoginRequiredAlert from './LoginRequired';

// user context
import {useContext} from "react";
import { AuthContext } from "../context/authContext";


function ViewChat() {

    const {isLoggedIn} = useContext(AuthContext)

	return (
        isLoggedIn ? 
        <p>here will be a chat room</p>
        :  <LoginRequiredAlert/>

        
		
	)
}

export default ViewChat