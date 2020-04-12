import React from 'react';
// import { BrowserRouter as Router, 
//   Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthHeader from './utils/setAuthHeader';
import './App.css';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Routes from './config/routes';
import UserAPI from './api/UserAPI';



class App extends React.Component {

  state = {
    isLoggedIn: false,
    user: '',
    id: ''
  }

  // when we registered the user, we set the jwtToken to localStorage. This checks if it exists, and if so, set it to our state when the comp loads
  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      // decode the token and set the state to token props
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        user: decoded.email,
        id: decoded._id,
        isLoggedIn: true,
      })
    }
  }

// Make the API call, if success, get the token from res and set that to local storage
// Then set the auth header to token, decode it, and set state

  signup = (user) => {
    UserAPI.register(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        
        const decoded = jwt_decode(token);
        this.setState({
          user: decoded.email,
          id: decoded._id,
        })
      }
    })
    .catch (err => console.log(err));
  };

  login = (user) => {
    UserAPI.login(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);

        const decoded = jwt_decode(token);
        this.setState({
          user: decoded.username,
          id: decoded._id,
          isLoggedIn: true
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
      id: '',
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header logout={this.logout} user={this.state.user}/>

        <Routes 
          register={this.register} 
          login={this.login} 
          user={this.state.user} 
          id={this.state.id} 
          isLoggedIn={this.state.isLoggedIn}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
