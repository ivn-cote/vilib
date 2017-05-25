import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CounterPage from '../containers/CounterPage';
import AnotherPage from '../components/AnotherPage';
import NotFoundPage from '../components/NotFoundPage';

export default (
  <Switch>
    <Route exact path="/" component={CounterPage} />
    <Route exact path="/another" component={AnotherPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
