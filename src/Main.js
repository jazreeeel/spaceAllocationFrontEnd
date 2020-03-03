import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import loadInputs from './pages/loadInputs';
import form from './form/form';

const Main =() => {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/loadInputs' component={form}></Route>
      </Switch>
    );
  }

  export default Main;