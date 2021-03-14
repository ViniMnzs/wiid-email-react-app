import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
