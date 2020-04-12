import React from 'react';
// import { BrowserRouter as Router, 
//   Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Routes from './config/routes';



class App extends React.Component {

  state = {
    isLoggedIn: false,
    user: '',
    id: ''
  }


  // register = (user) => {
  //   UserAPI.register(user)
  //   .then(res => {
  //     if (res.status === 200) {
  //       const token = res.data.token;
  //       localStorage.setItem('jwtToken', token);
  //       setAuthHeader(token);
        
  //       const decoded = jwt_decode(token);
  //       this.setState({
  //         user: decoded.email,
  //         id: decoded._id
  //       })
  //     }
  //   })
  //   .catch (err => console.log(err));
  // };

  // login = (user, id) => {
  //   localStorage.setItem('user', user);
  //   localStorage.setItem('id', id);
  //   this.setState({ 
  //     isLoggedIn: true,
  //     user: localStorage.getItem('user'),
  //     id: localStorage.getItem('id') 
  //   })
  // }

  // logout = () => {
  //   UserAPI.logout()
  //     .then(res => {
  //       localStorage.removeItem('user');
  //       localStorage.removeItem('id')
  //       this.setState({
  //         user: null,
  //         id: null,
  //       })
  //   })
  // }



  render() {
    return (
      <div className="App">
        {/* if !user, show header */}
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
