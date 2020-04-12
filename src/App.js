import React from 'react';
// import { BrowserRouter as Router, 
//   Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Routes from './config/routes';
import UserAPI from './api/UserAPI';
import { Switch } from '@material-ui/core';


class App extends React.Component {

  state = {
    isLoggedIn: false,
    user: '',
    id: ''
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      // decode the token and set the state to token props
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        user: decoded.email,
        id: decoded._id
      })
    }
  }

// Make the API call, if success, get the token from res and set that to local storage
// Then set the auth header to token, decode it, and set state

  register = (user) => {
    UserAPI.register(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        
        const decoded = jwt_decode(token);
        this.setState({
          user: decoded.email,
          id: decoded._id
        })
      }
    })
    .catch (err => console.log(err));
  };


  login = (user) => {
    UserApi.login(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);

        const decoded = jwt_decode(token);
        this.setState({
          user: decoded.username,
          id: decoded._id
        })
      }
    })
    .catch(err => console.log(err));
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    // passing the header no value will make its logic falsy, which will remove the header
    setAuthHeader();
    // remove the user info from state so the re-render will log them out and change the HTML header automatically
    this.setState({
      user: '',
      id: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Header logout={this.logout} user={this.state.user}/>
        <Routes register={this.register} login={this.login} user={this.state.user} id={this.state.id}/>
        <Footer />
      </div>
    );
  }
}

export default App;
