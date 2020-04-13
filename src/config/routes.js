import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../auth/Register/Register'; 
import Login from '../auth/Login/Login';
import User from '../components/User/User';
import PlantContainer from '../components/PlantContainer/PlantContainer';


{/*  FROM App.js
register={this.register} 
login={this.login} 
user={this.state.user} 
id={this.state.id} 
firstName={this.state.firstName}
lastName={this.state.lastName}
isLoggedIn={this.state.isLoggedIn}
 */}

const Routes = (props) => {
 
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/about' component={About} /> */}
        
      <Route path='/register'
        render={() => props.user
        ? <Redirect to='/login' />
        : <Register register={props.register} /> }
      />

      <Route path='/login' 
        render={() => props.user
        ? <Redirect to='/user' />
        : <Login login={props.login}/>}
      />
      
      <Route path='/user' component={User} />
      <Route path='/logout' component={Home} />

       <Route path='/plants' component={PlantContainer} />
      {/*<Route expact path='/myplants' component={MyPlants} /> */}

      {/* if this.props.user => User, Plants, MyPlants,Logout */}
      {/* if !this.props.user => Login, Signup, Home */}
    </Switch>
  )
}

export default Routes;