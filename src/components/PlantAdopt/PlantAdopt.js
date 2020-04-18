import React from 'react';
import '../Plant/Plant.css';
import { Button, Card, CardContent, CardActions, IconButton, Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Dialog, DialogTitle, DialogContent, DialogContentText, 
  DialogActions } from '@material-ui/core';


class PlantAdopt extends React.Component {

  state = {
    plantId: this.props.plant._id,
    name: this.props.plant.name,
    sunlight: this.props.plant.sunlight,
    water: this.props.plant.water,
    user: '',
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let adoptedPlant = {
      _id: this.state.plantId,
      name: this.state.name,
      sunlight: this.state.sunlight,
      water: this.state.water,
      user: this.props.userId,
    }
    this.props.handleAPIAdopt(adoptedPlant)
    this.setState({ open: false })
  }

  render() {  
  
    return (
      <div>
        <Card className='plantcard'>
          <CardContent>
            <Typography variant="body2" color="textSecondary">
            <img src='../plogo.png' alt='plants' height='150' width='150'/><br></br>
              <h3>Name: {this.state.name}</h3>
              <h3>Sunlight: {this.state.sunlight}</h3>
              <h3>Water: {this.state.water}</h3>
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button size='small' onClick={this.handleOpen}>Adopt Me!</Button>
          </CardActions>
        </Card>        

      {/*****  DONATE DIALOG  *****/}
      <Dialog open={this.state.open} onClose={this.handleClose}>
      <DialogTitle id="form-dialog-title">Adopt</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to adopt <strong>{this.state.name}</strong>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={this.handleSubmit} color="primary">
          Yes, I'm sure.
        </Button>
      </DialogActions>
    </Dialog>
    </div>
    )
  }
}

export default PlantAdopt;