import React from 'react';
import { Button, Card, CardContent, TextField, Grid } from '@material-ui/core';


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
            <Button size='small' type='submit' value='submit' onClick={this.props.hideModal} >Add this plant!</Button>
            <Button size='small' onClick={this.props.hideModal}>Cancel</Button> 
          </form>
        </CardContent>
      </Card>
    )
  }
}

export default PlantNew;
