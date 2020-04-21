import React from 'react';
import './Register.css';
import { Avatar, Button, CssBaseline, TextField, 
        Grid, Typography, Container } from '@material-ui/core';
import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00897b" 
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00897b"
  },
});

class Register extends React.Component {
  
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    showPassword: false,
    isEmailValid: false,
    isPwdvalid: false
  };


  validateEmail = (email) => {
    const emailRegex = /[^@]+@[^.]+..+/;
    return (emailRegex.test(email)) ? true : false;
  };

  validatePwd = (password) => {
    const pwdRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
    return (pwdRegex.test(password)) ? true : false;
  };

  handleChange = input => (e) => {
    this.setState({ 
      [input]: e.target.value 
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateEmail(this.state.email) && this.validatePwd(this.state.password)
        && this.state.firstName && this.state.lastName) {
      let user = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
      this.props.register(user)

    } else {
      console.log("invalid email/password or name fields are empty")
    }
  } 

  render() {
    const { classes } = this.props;

    return (
      <div className='register'>
        <div className='registerform'>
          <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LocalFloristOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <br></br>

              <form className={classes.form} onSubmit={this.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname" variant="outlined"
                      fullWidth  autoFocus
                      id="firstName" label="First Name"
                      name="firstName" value={this.state.firstName}
                      onChange={this.handleChange('firstName')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="lname" variant="outlined"
                      fullWidth autoFocus
                      id="lastName" label="Last Name"
                      name="lastName" value={this.state.lastName}
                      onChange={this.handleChange('lastName')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="email" variant="outlined"                 
                      fullWidth autoFocus required                  
                      id="email" label="Email Address"                  
                      name="email" value={this.state.email}
                      onChange={this.handleChange('email')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="current-password" variant="outlined"                 
                      fullWidth autoFocus required
                      id="password" label="Password" type="password"
                      name="password" value={this.state.password}
                      onChange={this.handleChange('password')}             
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit" variant="contained"
                  fullWidth color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </form>
              
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Register);