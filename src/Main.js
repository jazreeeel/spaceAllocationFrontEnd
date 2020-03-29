import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import loadInputs from './pages/loadInputs';
import createAccount from './pages/createAccount';

const Main =() => {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/loadInputs' component={loadInputs}></Route>
        <Route exact path='/createAccount' component={createAccount}></Route>
      </Switch>
    );
  }

  export default Main;