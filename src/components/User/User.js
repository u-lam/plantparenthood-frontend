import React from 'react';
import './User.css';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Button, Card, CardContent, CardActions, IconButton,
          Divider, TextField, Grid, Typography } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, 
          DialogContentText, DialogActions } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import UserAPI from '../../api/UserAPI';


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


class User extends React.Component {

  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.user,
    isEditing: false,
    open: false
  }

  // EDIT USER PROFILE
  handleChange = input => (e) => {
    this.setState({ 
      [input]: e.target.value 
    })  
  }

  handleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
      // password: this.state.plant.password,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
      let updatedUser = {
        id: this.props.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      }
    this.props.update(updatedUser)
    this.setState({ isEditing: !this.state.isEditing })
  }


  // DELETE USER PROFILE
  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.delete(this.props.id);
    this.setState({ 
      open: false,
    })
  }

  
  // Upon page load
  componentDidMount() {
    UserAPI.show(this.props.id)
    .then(res => {
      this.setState({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email
      })
    })
  }

  render() {
    const { classes } = this.props

    return (
      <div className='root'>
        <div className='profilecard'>
        <br></br>
        {/* WHEN NOT EDITING */}
        {!this.state.isEditing && 
          <Card className={classes.root} >
            <CardContent>
                <Avatar alt="Teddy Lam" src="../../profile.JPG" className={classes.large}/><br></br>
                <Typography gutterBottom variant="body1" component="h3" >
                    Name: {this.state.firstName} {this.state.lastName}
                </Typography>
                <Typography gutterBottom variant="body1" component="h3" >
                    Email: {this.state.email}
                </Typography>
            <Divider />
            <br></br>
              <CardActions disableSpacing className={classes.root}>
                <IconButton onClick={this.handleEdit} size="small" style={{ color: "#639a67"}}>
                  <EditOutlinedIcon /> 
                </IconButton>
                ||
                <IconButton onClick={this.handleOpen} size="small" style={{ color: "#f5b971"}}>
                  <HighlightOffIcon /> 
                </IconButton>
              </CardActions>
            </CardContent>
          </Card> 
        }

        {/* WHEN EDITING  */}
        {this.state.isEditing && 
        <Card className={classes.root} >
          <CardContent>
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="firstName" variant="outlined"                 
                    autoFocus type="text"            
                    id="firstName" label="First name"          
                        
                    name="firstName" value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="lastName" variant="outlined"                 
                    autoFocus type="text"            
                    id="lastName" label="Last name"            
                        
                    name="lastName" value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="password" variant="outlined"                 
                    autoFocus type='email'
                    id="email" label="Email" 
                
                    name="email" value={this.state.email}
                    onChange={this.handleChange('email')}           
                  />
                </Grid>
              </Grid>
              <br></br>
              <Button size='small' type='submit' value='submit'>Save</Button>
              <Button size='small' onClick={this.handleEdit}>Cancel</Button> 
            </form>
          </CardContent>
        </Card>
        }

        {/*****  DELETE DIALOG  *****/}
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete <strong>{this.state.firstName}</strong>?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} color="primary">
              Yes, I'm sure. 
            </Button>
          </DialogActions>
        </Dialog>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(User);