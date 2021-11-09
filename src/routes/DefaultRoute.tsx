import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

const DefaultRoute = ({ ...props }: RouteProps) => (
  <React.Suspense fallback="...loading">
    <Route {...props} />
  </React.Suspense>
);

export default DefaultRoute;
