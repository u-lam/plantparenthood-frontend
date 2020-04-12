import React from 'react';
import PlantAPI from '../../api/PlantAPI';
import './PlantContainer.css';


class PlantContainer extends React.Component {

  state = {
    plants = []
  }

  handleEdit = (plant) => {
    // call API
  }

  handleDelete = (id) => {
    // call API
  }

  componentDidMount() {
    PlantAPI.index()
    .then(res => {
      this.setState({ plants: res })
    })
  }

  render() {
    let plants = this.state.plants;

    return (
      <div className='postContainer'>
        <h3 className=''>Plants</h3>
        {plants && plants.map(plant => {
          return <Plant plant={plant} key={plant._id}
                        handleEdit={this.handleEdit}
                        handleDelete={this.handleDelete}
                  /> 
        }) }
      </div>
    )
  }
}

export default PlantContainer;