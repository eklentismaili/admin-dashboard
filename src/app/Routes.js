import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const LazyAbout = React.lazy(() => import('../pages/About'));
const LazyContact = React.lazy(() => import('../pages/Contact'));
// const LazyServices = React.lazy(() => import('../pages/services/Services'));
// const LazyTerms = React.lazy(() => import('../pages/terms/Terms'));

const Routes = () => {
  return (
    <React.Suspense fallback="Loading...">
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<LazyAbout />} />
        <Route path="/contact" element={<LazyContact />} />
        {/* <Route path="services" element={<LazyServices />} />
        <Route path="/terms" element={<LazyTerms />} /> */}
      </ReactRoutes>
    </React.Suspense>
  );
};

export default Routes;
