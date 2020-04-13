import React from 'react';
import './Login.css';
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


class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = input => (e) => {
    this.setState({ 
      [input]: e.target.value 
    })
  };


  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(user);
  }

  render() {
    return(
      <div className="login">
        <form onSubmit={this.handleSubmit}>
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
        <Button variant="outlined" color="primary" >Login</Button>
        </form>
      </div>
    )
  }
}

export default Login;