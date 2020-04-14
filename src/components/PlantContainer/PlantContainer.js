import React from 'react';
import PlantAPI from '../../api/PlantAPI';
import './PlantContainer.css';
import Plant from '../Plant/Plant';
import { Container }  from '@material-ui/core';


class PlantContainer extends React.Component {

  state = {
    plants: [],
    currentUser: '',
  }

  // Need to recheck
  // handleCreate = () => {
  //   PlantAPI.create({
  //     name: this.state.plants.name,
  //     sunlight: this.state.plants.sunlight,
  //     water:this.state.plants.sunlight
  //   })
  //   .then(res => {
  //     console.log(res)
  //     let plants = this.state.plants;
  //     let newPlant = res;
  //     plants.push(newPlant)
  //   })
  //   this.setState({ plants: this.state.plants })
  // }

  // handleUpdate = (plant) => {
  //   PlantAPI.update(plant)
  //   .then(res => {
  //     console.log(res)
  //     let plants = this.state.plants
  //     let plantToUpdate = plants.findIndex(plant => plant._id === res._id)
  //     plants[plantToUpdate] = res;
  //     this.setState({ plants })
  //   }) 
  // }

  // handleDelete = (id) => {
  //   PlantAPI.delete(id)
  //   .then(res => {
  //     let plants = this.state.plants.filter(plant => {
  //       return plant._id !== id
  //     })
  //     this.setState({ plants })
  //   })
  // }

  componentDidMount() {
    PlantAPI.index()
    .then(res => {
      console.log('comp did mount')
      console.log(res.data)
      this.setState({ 
        plants: res.data,
        currentUser: this.props.user
      })
    })
  }

  render() {
    let plants = this.state.plants;
    console.log('plant container logged in user: ' , this.props.user)
    console.log(plants)
   
    return (
      <div>
        <h3>My Plant Container</h3>
        <Container className='plantcontainer'
            style={{ backgroundColor: '#cfe8fc', height: '100%', width: '80vw',
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'spacearound', flexGrow: 1 }}>
            {plants && plants.map(plant => {
              return <>                 
                    {this.props.firstName === plant.user
                    ? <Plant plant={plant} key={plant._id}
                      handleUpdate={this.handleUpdate}
                      handleDelete={this.handleDelete}
                      /> 
                    : null
                    }
                  </>
          }) }
        </Container>
      </div>
    )
  }
}

export default PlantContainer;
