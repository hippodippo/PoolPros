import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FindProPage from './pages/FindProPage/FindProPage';

export default (
  <Switch>
    <Route exact path="/" component={FindProPage} />
    {/* <Route path="/" component={App} />
    <Route path="/" component={App} /> */}
  </Switch>
);