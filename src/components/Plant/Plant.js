import React from 'react';
import './Plant.css';
import { Button, Card, CardContent, CardActions, IconButton,
        Typography, TextField, Grid } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, 
        DialogActions } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

class Plant extends React.Component {

  state = {
    isEditing: false,
    open: false,
    id: this.props.plant._id,
    name: this.props.plant.name,
    sunlight: this.props.plant.sunlight,
    water: this.props.plant.water,
    owner: this.props.plant.user
  }

  // **  EDIT PLANT  **
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

  // **  DELETE PLANT  **
  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleDelete = (e) => {
    e.preventDefault();
    let deletedPlantId = this.state.id
    this.props.handleAPIDelete(deletedPlantId);
    this.setState({ open: false })
  }


  render() {
    
    return (
      <div>
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
              <Typography variant="body2" color="textSecondary">
                <img src='../plants.png' alt='plants' height='150' width='150'/> <br></br>
                <p>Name: {this.state.name}</p>
                <p>Sunlight: {this.state.sunlight}</p>
                <p>Water: {this.state.water}</p>

                {this.props.plant.user 
                ? <> Owner: {this.state.owner} </>
                : null
                }
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              {this.props.plant.user
              ? <>
                <IconButton aria-label="edit">
                  <EditOutlinedIcon onClick={this.handleEdit}/>
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteOutlineOutlinedIcon onClick={this.handleOpen}/>
                </IconButton>
                  <Button size='small'>Donate</Button>
                  <Button size='small'>Trade</Button> 
                </>  
              : <Button size='small'>Adopt Me!</Button>
              }
            </CardActions>
          </Card> 
        }
      </div>       
    )
  }
}

export default Plant;