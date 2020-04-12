import React from 'react';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    // this.props.login(user);
  }

  render() {
    return(
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>Email: 
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <label>Password: 
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <Button variant="outlined" color="primary" type="submit">Submit</Button>
          
        </form>
      </div>
    )
  }
}

export default Login;