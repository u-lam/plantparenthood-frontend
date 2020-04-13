import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from '@material-ui/core/Button';
import PlantContainer from '../../components/PlantContainer/PlantContainer';


const Header = (props) => {

    return (
      <div className='header'>
        <nav className="navbar">
          <div className="nav-left"> 
            {/* <img src='../../plants.png' width='20' height='20' ></img> */}
            <Link className="nav-name" to={"/"}>Plant Parenthood</Link>
          </div>

          { (props.user) 
          ? <>
              <div className="navbar-right"> 
                <Link className="nav-logout" to={"/plants"}>
                  <Button variant="outlined" color="secondary">Plants</Button>
                </Link>
              </div>
              <div className="navbar-right"> 
                <Link className="nav-logout" to={"/user"}>
                  <Button variant="outlined" color="secondary">Profile</Button>
                </Link>
              </div>
              <div className="navbar-right"> 
                <Link className="nav-logout" to={"/logout"} onClick={props.logout}>
                  <Button variant="outlined" color="secondary">Log Out</Button>
                </Link>
              </div>
            </>
          : <>
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
            </>
          }
        </nav>
      </div>
    )
}

export default Header;