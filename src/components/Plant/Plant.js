import React from 'react';
import './Plant.css';

class Plant extends React.Component {

  state = {
    isEditing: false,
    name: this.props.plant.name,
    sunlight: this.props.plant.sunlight,
    water: this.props.plant.water,
    // owner: this.props.plant.user
  }

  render() {
    return (
      <div className='post'>
        <h3>Name: {this.state.name}</h3>
        <h3>Sunlight: {this.state.sunlight}</h3>
        <h3>Water: {this.state.water}</h3>
        <h3>Owner: {this.state.owner}</h3>
      </div>
    )
  }
}

export default Plant;