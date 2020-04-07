import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import loadInputs from './pages/loadInputs';
import createAccount from './pages/createAccount';
import adminLogin from './pages/adminLogin';
import adminAddAccount from './pages/adminAddAccount';
import resetPassAdmin from './pages/resetPassAdmin';

const Main =() => {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/loadInputs' component={loadInputs}></Route>
        <Route exact path='/createAccount' component={createAccount}></Route>
        <Route exact path='/adminLogin' component={adminLogin}></Route>
        <Route exact path='/adminAddAccount' component={adminAddAccount}></Route>
        <Route exact path='/resetPassAdmin' component={resetPassAdmin}></Route>
      </Switch>
    );
  }

  export default Main;