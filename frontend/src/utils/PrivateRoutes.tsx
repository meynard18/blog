import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const auth = {
   token: false, // Set to true if the token is valid
};

const ProtectedRoute: React.FC = () => {
   if (auth.token) {
      return <Outlet />;
   } else {
      return <Navigate to="/" />;
   }
};

export default ProtectedRoute;
