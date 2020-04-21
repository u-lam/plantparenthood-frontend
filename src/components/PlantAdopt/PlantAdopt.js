import React from 'react';
import '../Plant/Plant.css';
import { Button, Card, CardContent, CardActions, IconButton, Typography, Divider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Dialog, DialogTitle, DialogContent, DialogContentText, 
        DialogActions } from '@material-ui/core';


class PlantAdopt extends React.Component {

  state = {
    open: false,
    plantId: this.props.plant._id,
    name: this.props.plant.name,
    sunlight: this.props.plant.sunlight,
    water: this.props.plant.water,
    user: ''
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
    this.props.handleAPIAdopt(adoptedPlant);
    this.setState({ open: false })
  }

  render() {  
 
    return (
      <div>
        <Card className='plantcard'>
          <CardContent>
            <div>
              <img src='../aloe2.jpeg' alt='plants' height='150' width='150'/>
            </div>
            <br></br>
            <Typography gutterBottom variant="h6" component="h6" >
              Name: {this.state.name} 
            </Typography>
            <Typography gutterBottom variant="body2" component="p" color="textSecondary">
              Daily sunlight: {this.state.sunlight} 
            </Typography>
            <Typography gutterBottom variant="body2" component="p" color="textSecondary">
              Water needs: {this.state.water} 
            </Typography>
          </CardContent>
          <Divider />
          <br></br>

          <CardActions disableSpacing className='cardaction'>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{ color: "#f45905"}}/>
            </IconButton>
            <Button size='small' onClick={this.handleOpen} style={{ color: "#fb9224"}}>Adopt Me!</Button>
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