import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageNotFound from 'components/pages/NotFound';

import DefaultRoute from './DefaultRoute';

const BookingScheduler = lazy(() => import('components/pages/BookingScheduler'));

const Router = () => (
  <BrowserRouter>
    <Switch>
      <DefaultRoute path="/" component={BookingScheduler} />

      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
