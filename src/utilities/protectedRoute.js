

import {React, useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const ProtectedRoute = ({ children }) => {
  const {user} = useContext(AuthContext)

  if (!user) {
    return <Navigate to='/alert' />;
  }
  return children;
};

export default ProtectedRoute;