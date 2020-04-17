import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../auth/Register/Register'; 
import Login from '../auth/Login/Login';
import User from '../components/User/User';
import PlantContainer from '../components/PlantContainer/PlantContainer';
import PlantAdoptContainer from '../components/PlantAdoptContainer/PlantAdoptContainer';


{/*  FROM App.js
register={this.register} 
login={this.login} 
update={this.update}
delete={this.delete}
user={this.state.user}  // email
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

      <Route path='/logout' component={Home} />
      <Route path='/user' 
        render={() => props.user
      ?  <User update={props.update} delete={props.delete}
            user={props.user} id={props.id} firstName={props.firstName} lastName={props.lastName} />
      : <Redirect to='/' />
      }
      />

      <PlantContainer path='/myplants' user={props.user} firstName={props.firstName} id={props.id}/>
      <PlantAdoptContainer path='/plants' user={props.user} firstName={props.firstName} id={props.id}/>

    </Switch>
  )
}

export default Routes;