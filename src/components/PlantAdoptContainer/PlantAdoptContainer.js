import React from 'react';
import './PlantAdoptContainer.css';
import PlantAPI from '../../api/PlantAPI';
import { withStyles } from '@material-ui/core/styles';
import { Container }  from '@material-ui/core';
import PlantAdopt from '../PlantAdopt/PlantAdopt';


const styles = theme => ({
  container: {
    height: '100%', 
    width: '80vw',
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
  }
});

class PlantAdoptContainer extends React.Component {

  state = {
    plants: []
  }

  handleAPIAdopt = (newPlant) => {
    PlantAPI.adopt(newPlant)
    .then(res => {
      let newPlants = this.state.plants.filter(plant => {
        return plant._id !== newPlant._id
      });
      this.setState({ plants: newPlants })
    });
  }

  componentDidMount() {
    PlantAPI.index()
    .then(res => {
      this.setState({ plants: res.data })
    })
  }

  render() {
    let plants = this.state.plants;
    const { classes } = this.props;

    return (
      <div className='pacontainer'>
        {/* <h3>Plants to Adopt Container</h3> */}
        <Container className={classes.container}>
            {plants && plants.map(plant => {
              return (
                <div key={plant._id}>
                  {!plant.user &&
                   <PlantAdopt plant={plant}
                    firstName={this.props.firstName} userId={this.props.id}
                    handleAPIAdopt={this.handleAPIAdopt}
                    /> 
                  }
                </div>
              )
          }) }
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(PlantAdoptContainer);