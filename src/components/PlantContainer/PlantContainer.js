import React from 'react';
import PlantAPI from '../../api/PlantAPI';
import './PlantContainer.css';
import Plant from '../Plant/Plant';
import PlantNew from '../PlantNew/PlantNew';
import { Button, Container }  from '@material-ui/core';


class PlantContainer extends React.Component {

  state = {
    plants: []
  }


  handleAPICreate = (plant) => {
    PlantAPI.create(plant)
    .then(res => {
      let newPlants = this.state.plants;
      newPlants.push(res.data)
      this.setState({ plants: newPlants })
    })
    .catch((err) => console.log(err))    
  }

  handleAPIUpdate = (plant) => {
    PlantAPI.update(plant)
    .then(res => {
      let plants = this.state.plants
      let plantToUpdate = plants.findIndex(plant => plant._id === res._id)
      plants[plantToUpdate] = res;
      this.setState({ plants })
    }) 
  }

  handleAPIDelete = (id) => {
    PlantAPI.deletePlant(id)
    .then(res => {
      let plants = this.state.plants.filter(plant => {
        return plant._id !== id
      })
      this.setState({ plants })
    })
  }

  componentDidMount() {
    PlantAPI.index()
    .then(res => {
      this.setState({ plants: res.data })
    })
  }

  render() {
    let plants = this.state.plants;

    return (
      <div>
        <Container>
        <h3>My Plant Container</h3>
        <PlantNew handleAPICreate={this.handleAPICreate} user={this.props.user} firstName={this.props.firstName}/>
        </Container>
        <br></br>
        <Container className='plantcontainer'
            style={{ backgroundColor: '#cfe8fc', height: '100%', width: '80vw',
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'spacearound'}}>
            {plants && plants.map(plant => {
              return (
                <div key={plant._id}>                 
                  {this.props.firstName === plant.user 
                  ? <Plant plant={plant} 
                    handleAPIUpdate={this.handleAPIUpdate}
                    handleAPIDelete={this.handleAPIDelete}
                    /> 
                  : null
                  }
                 </div>
              )
          }) }
        </Container>
      </div>
    )
  }
}

export default PlantContainer;
