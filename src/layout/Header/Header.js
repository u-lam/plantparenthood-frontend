import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Avatar, Button, ButtonGroup, Menu, MenuItem } from '@material-ui/core';
import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header (props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  }


    return (
      <div className='header'>
        <nav className="navbar">
          <div className="nav-left"> 
            <Link className="nav-name" to={"/"}>
            <Avatar style={{ backgroundColor:'#00897b' }}>
              <LocalFloristOutlinedIcon /> 
            </Avatar>
            </Link>
            {/* <Link className="nav-name" to={"/about"}>
              About
            </Link> */}
          </div>

          { (props.user) 
          ? <>
              <ButtonGroup variant="text" color="primary" >
              <div className="navbar-right"> 
                <Link className="nav-logout" to={"/plants"}>
                  <Button variant="outlined" color="secondary"  size="small">Adopt a Plant</Button>
                </Link>
              </div>
              <div className="navbar-right"> 
                <Link className="nav-logout" to={"/myplants"}>
                  <Button variant="text" color="primary" size="small"> My Plants</Button>
                </Link>
              </div>
              <div className="navbar-right"> 
                  <AccountCircleIcon color="primary" fontSize="large" onClick={handleClick}/>
                  <Menu id="simple-menu"
                    anchorEl={anchorEl} keepMounted
                    open={Boolean(anchorEl)} onClose={handleClose}
                  >
                    <Link className="nav-logout" to={"/user"}>
                      <MenuItem onClick={handleClose}>View Profile</MenuItem> 
                    </Link>
                    <Link className="nav-logout" to={"/logout"} onClick={props.logout}>
                      <MenuItem onClick={handleClose}>Log Out</MenuItem> 
                    </Link>
                  </Menu>
              
              </div>
                </ButtonGroup>
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