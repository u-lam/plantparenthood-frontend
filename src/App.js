import React from 'react';
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
    id: '',
    firstName: '',
    lastName: ''
  }

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
          id: decoded._id,
          firstName: decoded.firstName,
          lastName: decoded.lastName
        })
      }
    })
    .catch (err => console.log(err));
  };

  update = (user) => {
    UserAPI.update(user)
    .then(res => {
      this.setState({
        user: res.data.email,
        firstName: res.data.firstName,
        lastName: res.data.lastName
      })
    })
    .catch (err => console.log('update error', err));
  }

  login = (user) => {
    UserAPI.login(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);

        const decoded = jwt_decode(token);
        this.setState({
          user: decoded.email,
          id: decoded._id,
          firstName: decoded.firstName,
          lastName: decoded.lastName,
          isLoggedIn: !this.state.isLoggedIn,
        })
      }
    })
    .catch(err => console.log('login error', err));
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    // passing the header no value will make its logic falsy, which will remove the header
    setAuthHeader();
    // remove the user info from state so the re-render will log them out and change the HTML header automatically
    this.setState({
      user: '',
      id: '',
      firstName: '',
      lastName: '',
      isLoggedIn: false
    })
  }

  delete = (user) => {
    UserAPI.deleteUser(user)
    .then(res => {
      this.setState({
        isLoggedIn: false,
        user: '',
        id: '',
        firstName: '',
        lastName: ''
      })
    })
    .catch(err => console.log('delete error', err))
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        user: decoded.email,
        id: decoded._id,
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        isLoggedIn: !this.state.isLoggedIn,
      })
    }
  }


  render() {
    return (
      <div className="App">
        <Header logout={this.logout} user={this.state.user}/>

        <Routes 
          register={this.register} 
          login={this.login} 
          update={this.update}
          delete={this.delete}
          user={this.state.user}  // user email
          id={this.state.id} 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          isLoggedIn={this.state.isLoggedIn}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
