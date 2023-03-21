import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>;
}

export default App;
