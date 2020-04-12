import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from '@material-ui/core/Button';


class Header extends React.Component {

  


  render() {
    return (
      <div className='header'>
        <nav className="navbar">
          <div className="nav-left"> 
            {/* <img src='../../plants.png' width='20' height='20' ></img> */}
            <Link className="nav-name" to={"/"}>Plant Parenthood</Link>
          </div>
          <div className="navbar-right"> 
            <Link className="nav-register" to={"/register"}>
              <Button variant="outlined" color="secondary">Sign Up</Button>
            </Link>
          </div>
          <div className="navbar-right"> 
            <Link className="nav-login" to={"/login"}>
              <Button variant="outlined" color="primary">Log In</Button>
            </Link>
          </div>

        {/* if user is logged in */}
          <div className="navbar-right"> 
            <Link className="nav-logout" to={"/logout"}>
              <Button variant="outlined" color="secondary">Log Out</Button>
            </Link>
          </div>

        </nav>
        <hr></hr>
      </div>
    )
  }
}

export default Header;