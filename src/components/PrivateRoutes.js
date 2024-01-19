// PrivateRoutes.js

import React, { useEffect } from 'react';
import { UseAuth } from './UseAuth';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const isAuthenticated = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoutes;
