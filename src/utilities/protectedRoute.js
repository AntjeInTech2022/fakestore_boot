import {React, useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../context/authContext';
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const {user} = useContext(AuthContext)
  // const auth = getAuth();­­
  // const user = auth.currentUser;
  console.log('user',)

  if (user === null) {
  // if (!user) {
    return <Navigate to='/alert' />
  }
return children;
};

export default ProtectedRoute;