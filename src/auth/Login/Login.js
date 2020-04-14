import React from 'react';
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
    const { classes } = this.props;
    console.log('hello')
    console.log(this.state)

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalFloristOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <br></br>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
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
              Log In
            </Button>
          </form>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles)(Login);
