import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ element, restricted }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log('public route');
  return isLoggedIn && restricted ? <Navigate to='/' /> : <Outlet />;
};

export default PublicRoute;
