import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Avatar, Menu, MenuItem } from '@material-ui/core';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header (props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  }


  return (
    <nav>
    <div class="navigation" role="navigation">
      <div class="nav-bar">
        <ul>
          <li><Link to={"/"}>Home ||</Link></li>
          <li><Link to={"/about"}>About ||</Link></li>

          { (props.user) 
          ? <>
            <li><Link to={"/plants"}>Adopt A Plant ||</Link></li>
            <li><Link to={"/myplants"}>My Plants ||</Link></li>
            <li>
            {/* <AccountCircleIcon className='icon' style={{ color: "#f2ed6f"}} fontSize="large" onClick={handleClick}/> */}
              <Avatar alt="Teddy Lam" src="../../profile.JPG" className='icon'  onClick={handleClick}/>
              <Menu id="simple-menu"
                    anchorEl={anchorEl} keepMounted
                    open={Boolean(anchorEl)} onClose={handleClose}
              >
                <Link to={"/user"}>
                  <MenuItem onClick={handleClose}>View Profile</MenuItem> 
                </Link>
                <Link to={"/logout"} onClick={props.logout}>
                  <MenuItem onClick={handleClose}>Log Out</MenuItem> 
                </Link>
              </Menu>
            </li>
            </>
          : <>
            <li><Link to={"/login"}>Login ||</Link></li>
            <li><Link to={"/register"}>Signup</Link></li>
            </>
          }
        </ul>
       </div>
      </div>
    </nav>
  )
}

export default Header;


// To toggle hamburger icon when screen size is reduced
// $(document).ready(function(){
// 	$('.mobile-icon').click( function() {
// 		$('nav ul').toggleClass("showing");
// 	});
// });
