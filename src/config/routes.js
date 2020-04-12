import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Signup from '../auth/Signup/Signup'; 
import Login from '../auth/Login/Login';

const Routes = (props) => {
  // passing the login status from App to here 
  // let isLoggedIn = localStorage.getItem('jwtToken');
  let isLoggedIn = props.isLoggedIn;
  console.log(isLoggedIn)

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/about' component={About} /> */}

      <Route path='/login' 
        render={() => isLoggedIn
        ? <Redirect to='/user' />
        : <Login isLoggedIn={props.isLoggedIn}/>}
      />
          
      <Route path='/register'
        render={() => isLoggedIn
        ? <Redirect to='/login' />
        : <Signup component={Signup} /> }
      />
      
      <Route expact path='/logout' component={Home} />
      {/* <Route expact path='/user' component={User} />
     
      <Route expact path='/plants' component={Plants} />
      <Route expact path='/myplants' component={MyPlants} /> */}

      {/* if this.props.user => User, Plants, MyPlants,Logout */}
      {/* if !this.props.user => Login, Signup, Home */}
    </Switch>
  )
}

export default Routes;