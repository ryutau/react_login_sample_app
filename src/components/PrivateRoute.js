import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import LoginPage from '../pages/LoginPage';

const PrivateRoute = ({ component: RouteComponent, ...options }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Route {...options} component={RouteComponent} />;
  }

  return <Route {...options} component={LoginPage} />;
};

export default PrivateRoute;