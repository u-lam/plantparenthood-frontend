import React from 'react';
import PlantAPI from '../../api/PlantAPI';
import './PlantContainer.css';
import Plant from '../Plant/Plant';


class PlantContainer extends React.Component {

  state = {
    plants: [],
    // owner: this.props.user // ???
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
      this.setState({ plants: res.data })
    })
  }

  render() {
    let plants = this.state.plants;
    console.log('hey')
    console.log(plants)

    return (
      <div className='postContainer'>
        <h3 className=''>Plants</h3>
        {plants && plants.map(plant => {
          return <Plant plant={plant} key={plant._id}
                        handleUpdate={this.handleUpdate}
                        handleDelete={this.handleDelete}
                  /> 
        }) }
      </div>
    )
  }
}

export default PlantContainer;