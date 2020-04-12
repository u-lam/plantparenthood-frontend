import React from 'react';
import './Signup.css';
import UserAPI from '../../api/UserAPI';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



class Signup extends React.Component {

  state = {
    name: '',
    email: '',
    password: '',
    showPassword: false,
    isEmailValid: false,
    isPwdvalid: false
  };

  handleChange = input => (e) => {
    this.setState({ 
      [input]: e.target.value 
    })
  };

  // hide the password str
  showPwd = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  };

  mouseDownPwd = (e) => {
    e.preventDefault();
  };

// Can't get this feature to work
 validateEmail = (email) => {
    const emailRegex = /[^@]+@[^.]+..+/;
    if (emailRegex.test(email)) {
      this.setState({
        isEmailValid: !this.state.isEmailValid
      });
    }
    return false;
  };

  // validatePwd = (password) => {
  //   const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})/;
  //   if (pwdRegex.test(password)) {
  //     this.setState({
  //       isPwdValid: !this.state.isPwdValid
  //     });
      // }
  //   return false;
  // };


  handleSubmit = (e) => {
    e.preventDefault();
    this.validateEmail(this.state.email)
    // this.validatePwd(this.state.password)

  //  if email and password are not valid, console log to see what's been entered
    // if (!this.state.isEmailValid && !this.state.isPwdvalid) {
    //   return console.log(this.state.email, this.state.password)
    // }
    // if all is good, login
    console.log('all good to log in')
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.signup(user)
    // this.props.history.push('/login')
  }

  render() {
    console.log('hi--------------')
    console.log(this.state.email)
    console.log(this.state.isEmailValid)
    return (
      <div className="signup">
        <TextField fullWidth
          label="Name"
          error={!this.state.name}
          // helperText={!this.state.name ? 'Please provide your name' : null}
          onChange={this.handleChange('name')} />
        <br></br>

        <TextField fullWidth
          label="Email"
          error={!this.state.email}
          // helperText={!this.state.email ? 'Please provide a valid email' : null} 
          required={true}
          onChange={this.handleChange('email')} /> 
        <br></br>

        <FormControl fullWidth >
          <InputLabel>Password</InputLabel>
          <Input
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            required={true}
            error={!this.state.password}
            // helperText={!this.state.password ? 'Please provide a valid password' : null} 
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={this.showPwd}
                  onMouseDown={this.mouseDownPwd}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <br></br>
        <br></br>
        <br></br>
        <Button 
          variant="outlined" 
          color="primary"
          onSubmit={this.handleSubmit}>
          Submit
        </Button>
      </div>
    )
  }
}

export default Signup;


