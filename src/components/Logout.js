import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/auth-action';
import LoadingSpinner from './LoadingSpinner';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout()).then(() => {
      navigate('/', { replace: true });
    });
  }, []);

  return <LoadingSpinner />;
};

export default Logout;
