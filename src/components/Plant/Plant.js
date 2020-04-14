import React from 'react';
import './Plant.css';
import { Button, Card, CardContent, CardActions, IconButton, 
        Typography, TextField, Grid } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

class Plant extends React.Component {

  state = {
    isEditing: false,
    name: this.props.plant.name,
    sunlight: this.props.plant.sunlight,
    water: this.props.plant.water,
    owner: this.props.plant.user
  }

  // set the target state input to the target value
  handleChange = input => (e) => {
    this.setState({ 
      [input]: e.target.value 
    })  
  }
 
// toggles the state to editing so the form will show, or back to not editing
  handleEdit = () => {
    console.log('editing')
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  // invokes the api call in container and sends the update info to container to db
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handling submit')
  }

  // invokes the delete api call in container and updates the db
  handleDelete = (e) => {
    e.preventDefault();
    console.log('deleting')
  }

  
  render() {
    // console.log('plant.js: ', this.props.plant.user)
    
    return (
      <div>
        {/* WHEN EDITING */}
        {this.state.isEditing && 
        <>
          <Card className='plantcard' >
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="name" variant="outlined"                 
                      autoFocus                  
                      id="name" label="name"                  
                      name="name" value={this.state.name}
                      onChange={this.handleChange('name')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="sunlight" variant="outlined"                 
                      autoFocus 
                      id="sunlight" label="sunlight" 
                      name="sunlight" value={this.state.sunlight}
                      onChange={this.handleChange('sunlight')}           
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="water" variant="outlined"                 
                      autoFocus 
                      id="water" label="water" 
                      name="water" value={this.state.water}
                      onChange={this.handleChange('sunlight')}           
                    />
                  </Grid>
                </Grid>
                <br></br>
                <Button size='small' type='submit' value='submit'>Submit</Button>
                <Button size='small' onClick={this.handleEdit}>Cancel</Button> 
              </form>
            </CardContent>
          </Card>
        </>
      }

      {/* WHEN NOT EDITING */}
      {!this.state.isEditing && 
      <> 
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
                <DeleteOutlineOutlinedIcon onClick={this.handleDelete}/>
              </IconButton>
              
                <Button size='small'>Donate</Button>
                <Button size='small'>Trade</Button> 
              </>  
            : <Button size='small'>Adopt Me!</Button>
            }
          </CardActions>
        </Card> 
      </>
      }

      </div>       
    )
  }
}

export default Plant;