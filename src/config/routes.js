import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionPage from '../containers/CollectionPage';
import CreatePage from '../containers/CreatePage';
import UpdatePage from '../containers/UpdatePage';
import NotFoundPage from '../components/NotFoundPage';

export default (
  <Switch>
    <Route exact path="/" component={CollectionPage} />
    <Route exact path="/upd/:id" component={UpdatePage} />
    <Route exact path="/create" component={CreatePage} />
    <Route component={NotFoundPage} />
  </Switch>
);
