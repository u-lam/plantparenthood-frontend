import React from 'react';
import './Plant.css';
import { Button, Card, CardContent, CardActions, IconButton,
        Divider, TextField, Grid } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, 
        DialogActions } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


class Plant extends React.Component {

  state = {
    isEditing: false,
    open: false,
    openDonate: false,
    id: this.props.plant._id,
    name: this.props.plant.name,
    sunlight: this.props.plant.sunlight,
    water: this.props.plant.water,
    owner: this.props.firstName
  }

  // **  EDIT PLANT: handleChange, handleEdit, handleSubmit **
  handleChange = input => (e) => {
    this.setState({ 
      [input]: e.target.value 
    })  
  }
 
  handleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
      name: this.props.plant.name,
      sunlight: this.props.plant.sunlight,
      water: this.props.plant.water,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let updatedPlant = {
      id: this.state.id,
      name: this.state.name,
      sunlight: this.state.sunlight,
      water: this.state.water
    }
    this.props.handleAPIUpdate(updatedPlant);
    this.setState({ isEditing: !this.state.isEditing })
  }

  
  // **  DELETE PLANT: handleOpen, handleClose, handleDelete **
  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.handleAPIDelete(this.state.id);
    this.setState({ open: false });
  }

  // **  DONATE PLANT: handleDonate, use the same handleClose and handleOpen for the dialog
  handleOpenDonate = () => {
    this.setState({ openDonate: true })
  }

  handleCloseDonate = () => {
    this.setState({ openDonate: false })
  }

  handleDonate = (e) => {
    e.preventDefault();
    this.props.handleAPIDonate(this.state.id);
    this.setState({ openDonate: false })
  }

  render() {

    return (
      <div>
        {/*****  WHEN EDITING  *****/}
        {this.state.isEditing && 
          <Card className='plantcard' >
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="name" variant="outlined"                 
                      autoFocus type="text"             
                      id="name" label="name"                  
                      name="name" value={this.state.name}
                      onChange={this.handleChange('name')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="sunlight" variant="outlined"                 
                      autoFocus type='text'
                      id="sunlight" label="sunlight" 
                      name="sunlight" value={this.state.sunlight}
                      onChange={this.handleChange('sunlight')}           
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="water" variant="outlined"                 
                      autoFocus type='text'
                      id="water" label="water" 
                      name="water" value={this.state.water}
                      onChange={this.handleChange('water')}           
                    />
                  </Grid>
                </Grid>
                <br></br>
                <Button size='small' type='submit' value='submit'>Submit</Button>
                <Button size='small' onClick={this.handleEdit}>Cancel</Button> 
              </form>
            </CardContent>
          </Card>
        }

        {/*****  WHEN NOT EDITING  *****/}
        {!this.state.isEditing && 
          <Card className='plantcard' >
            <CardContent>
                <img src='../pointy.jpeg' alt='plants' height='180' width='180'/><br></br>
                <h4>Name: {this.state.name}</h4>
                <p>Sunlight: {this.state.sunlight}</p>
                <h5>Water: {this.state.water}</h5>
                {this.props.plant.user 
                ? <> Owner: {this.state.owner} </>
                : null
                }
            </CardContent>
            <Divider light />
            <CardActions disableSpacing>
              {this.props.plant.user
              ? <>
                <IconButton aria-label="edit" onClick={this.handleEdit}>
                  <EditOutlinedIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={this.handleOpen}>
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
                  <Button size='small' onClick={this.handleOpenDonate}>Donate</Button>
                </>  
              : <Button size='small'>Adopt Me!</Button>
              }
            </CardActions>
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


        {/*****  DONATE DIALOG  *****/}
        <Dialog open={this.state.openDonate} onClose={this.handleCloseDonate}>
          <DialogTitle id="form-dialog-title">Donate</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to donate <strong>{this.state.name}</strong>?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDonate} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDonate} color="primary">
              Yes, I'm sure.
            </Button>
          </DialogActions>
        </Dialog>

      </div>       
    )
  }
}

export default Plant;