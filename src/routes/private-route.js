import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /login page
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
