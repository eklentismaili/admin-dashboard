import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { useAuth } from '../providers/Auth';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import NoMatch from '../pages/NoMatch';

const LazyAbout = React.lazy(() => import('../pages/About'));
const LazyContact = React.lazy(() => import('../pages/Contact'));
const LazyUsers = React.lazy(() => import('../pages/Users'));
// const LazyServices = React.lazy(() => import('../pages/services/Services'));
// const LazyTerms = React.lazy(() => import('../pages/terms/Terms'));

const Routes = () => {
  const auth = useAuth();

  return (
    <React.Suspense fallback="Loading...">
      <ReactRoutes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <LazyAbout />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <LazyContact />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <LazyUsers />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </ReactRoutes>
    </React.Suspense>
  );
};

export default Routes;
