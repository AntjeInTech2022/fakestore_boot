

import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext2';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/alert' />;
  }
  return children;
};

export default ProtectedRoute;