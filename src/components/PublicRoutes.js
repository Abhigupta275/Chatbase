// PublicRoutes.js

import React, { useEffect } from 'react';
import { UseAuth } from './UseAuth';
import { Outlet, useNavigate } from 'react-router-dom';

const PublicRoutes = () => {
  const isAuthenticated = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? null : <Outlet />;
};

export default PublicRoutes;
