import React from 'react';
import './PlantNew.css';
import { Button, Card, CardContent, TextField, Typography, Grid } from '@material-ui/core';


class PlantNew extends React.Component {
 
  state = {
    name: '',
    sunlight: '',
    water: '',
    user: ''
  }

  handleChange = input => (e) => {
    this.setState({ 
      [input]: e.target.value 
    })  
  }


  
  handleSubmit = (e) => {
    e.preventDefault();
    let newPlant = {
      name: this.state.name,
      sunlight: this.state.sunlight,
      water: this.state.water,
      user: this.props.firstName
    }
    this.props.handleAPICreate(newPlant);
    this.setState({ 
      name: '',
      sunlight: '',
      water: ''
    })
  }

  render() {
    
    return (
      <div className='plantaddform'>
      <Card  className='plantaddform'>
        <CardContent className='addmodal'>
          <Typography component="subtitle" variant="h5" >
            Please fill out the details below to add a new plant!
          </Typography>
          <br></br>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField fullWidth
                  autoComplete="name" variant="outlined"                 
                  autoFocus type="text"            
                  id="name" label="name"                  
                  name="name" value={this.state.name}
                  onChange={this.handleChange('name')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth
                  autoComplete="sunlight" variant="outlined"                 
                  autoFocus type='text'
                  id="sunlight" label="sunlight" 
                  name="sunlight" value={this.state.sunlight}
                  onChange={this.handleChange('sunlight')}           
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth
                  autoComplete="water" variant="outlined"                 
                  autoFocus type='text'
                  id="water" label="water" 
                  name="water" value={this.state.water}
                  onChange={this.handleChange('water')}           
                />
              </Grid>
            </Grid>
            <br></br>
            <Button size='large' type='submit' value='submit' onClick={this.props.hideModal}>Add this plant!</Button>
            <Button size='large' onClick={this.props.hideModal}>Cancel</Button> 
          </form>
        </CardContent>
      </Card>
      </div>
    )
  }
}

export default PlantNew;
