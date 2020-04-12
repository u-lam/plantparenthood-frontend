import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Signup from '../auth/Signup/Signup'; 
import Login from '../auth/Login/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/register' component={Signup} />
      <Route path='/login' component={Login} />
      {/* <Route expact path='/user' component={User} />
      <Route expact path='/plants' component={Plants} />
      <Route expact path='/myplants' component={Home} /> */}
    </Switch>
  )
}

export default Routes;