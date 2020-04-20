import React from 'react';
import './About.css';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardActions, IconButton,
          Divider, Typography } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';


const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    top: 50,
    margin: '0 auto',
    fontFamily: 'monospace'
  },
  large: {
    width: 200,
    height: 200,
    margin: '0 auto',
  },
})


class About extends React.Component {

  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.user,
    isEditing: false,
    open: false
  }


  render() {
    const { classes } = this.props

    return (
      <div className='root'>
        <div className='profilecard'>
        <br></br>
        {/* WHEN NOT EDITING */}
          <Card className={classes.root} >
            <CardContent>
                <Avatar alt="Uyen Lam" src="../../uyen.JPG" className={classes.large}/><br></br>
                <Typography gutterBottom variant="body" component="h2" >
                    Name: Uyen Lam
                </Typography>
                <Typography gutterBottom variant="body" component="h3" >
                    I. Love. Plants. 
                </Typography>
            <Divider />
            <br></br>
              <CardActions disableSpacing className={classes.root} boxShadow={3}>
                <IconButton size="small" style={{ color: "#0779e4"}}>
                  <LinkedInIcon /> 
                </IconButton>
                ||
                <IconButton size="small" style={{ color: "#ff6363"}}>
                  <InstagramIcon /> 
                </IconButton>
                ||
                <IconButton size="small" style={{ color: "#f5b971"}}>
                  <AlternateEmailIcon /> 
                </IconButton>
              </CardActions>
            </CardContent>
          </Card> 
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(About);

