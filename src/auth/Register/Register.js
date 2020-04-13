import React from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, 
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
    backgroundColor: "#00e676" 
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00e676"
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


// Can't get these 2 features to work
 validateEmail = (email) => {
    const emailRegex = /[^@]+@[^.]+..+/;
    if (emailRegex.test(email)) {
      this.setState({
        isEmailValid: !this.state.isEmailValid
      });
    }
    return false;
  };

  validatePwd = (password) => {
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})/;
    if (pwdRegex.test(password)) {
      this.setState({
        isPwdValid: !this.state.isPwdValid
      });
      }
    return false;
  };

  handleChange = input => (e) => {
    this.setState({ 
      [input]: e.target.value 
    })
  };

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
    this.props.register(user)
    // this.props.history.push('/login')
  }


  render() {
    const { classes } = this.props;
    console.log('hi----------')
    console.log(this.state.email)
    console.log(this.state.isEmailValid)

    return (
      <Container component="main" maxWidth="xs">
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
              // onSubmit={this.handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to='/login' variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Register);