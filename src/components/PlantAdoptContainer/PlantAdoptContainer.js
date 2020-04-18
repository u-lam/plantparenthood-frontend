import React from 'react';
import PlantAPI from '../../api/PlantAPI';
import { withStyles } from '@material-ui/core/styles';
import { Container }  from '@material-ui/core';
import PlantAdopt from '../PlantAdopt/PlantAdopt';


const styles = theme => ({
  container: {
    backgroundColor: '#cfe8fc', 
    height: '100%', 
    width: '80vw',
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

class PlantAdoptContainer extends React.Component {

  state = {
    plants: []
  }

  handleAPIAdopt = (plant) => {
    PlantAPI.adopt(plant)
    .then(res => {
    let plants = this.state.plants.filter(plant => plant._id !== res._id)
    this.setState({ plants })
    });
  }


  componentDidMount() {
    PlantAPI.index()
    .then(res => {
      this.setState({ 
        plants: res.data
      })
    })
  }

  render() {
    let plants = this.state.plants;
    const { classes } = this.props;

    return (
      <div>
        <h3>Plants to Adopt Container</h3>
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