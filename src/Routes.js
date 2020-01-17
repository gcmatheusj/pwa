import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Saved from './pages/Saved';
import Notification from './pages/Notification'
import Search from './pages/Search'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/saved" component={Saved} />
        <Route path="/search" component={Search} />
        <Route path="/notification/:id" component={Notification} />
      </Switch>
    </Router>
  );
}