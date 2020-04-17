import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Button, Card, CardContent, CardActions, IconButton,
  Typography, TextField, Grid } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, 
  DialogContentText, DialogActions } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import UserAPI from '../../api/UserAPI';


// user = email address

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: 50,
  },
  large: {
    width: 200,
    height: 200,
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
    // console.log('this is props id:', this.props.id)
    // console.log('this is props:', this.props)
    // console.log('this is state:', this.state)
    // console.log(this.state.isEditing)
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div></div>
        <br></br>
        {/* WHEN NOT EDITING */}
        {!this.state.isEditing && 
          <Card className={classes.root} >
               <CardActions disableSpacing>
                  <IconButton aria-label="edit">
                    <EditOutlinedIcon onClick={this.handleEdit}/>Edit {this.props.firstName}
                  </IconButton>
                  <IconButton>
                    <HighlightOffIcon onClick={this.handleOpen} />Delete {this.props.firstname}
                  </IconButton>
                </CardActions>
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                <Avatar alt="Teddy Lam" src="../../profile.JPG" className={classes.large}/><br></br>
                  <p>First Name: {this.state.firstName}</p>
                  <p>Last Name: {this.state.lastName}</p>
                  <p>Registered Email: {this.state.email}</p>
              </Typography>
            </CardContent>
          </Card> 
        }

        {/* WHEN EDITING  */}
        {this.state.isEditing && 
        <Card  >
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
              Are you sure you want to delete <strong>{this.state.name}</strong>?
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
    )
  }
}

export default withStyles(styles)(User);