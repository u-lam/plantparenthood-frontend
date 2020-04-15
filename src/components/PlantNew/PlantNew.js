import React from 'react';


class PlantNew extends React.Component {

  state = {
    name: '',
    sunlight: '',
    water: '',
    user: ''
  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
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
      <div> 
        <form onSubmit={this.handleSubmit} id=''>
      <input
        type="text"
        name="name"
        placeholder='Name'
        value={this.state.name}
        onChange={this.handleChange}
      ></input>
      <input
        type="text"
        name="sunlight"
        placeholder='Sunlight'
        value={this.state.sunlight}
        onChange={this.handleChange}
      ></input>
   
      <input
         type="text"
        name="water"
        placeholder='Water'
        value={this.state.water}
        onChange={this.handleChange}
      ></input>

      <button>Add this plant to your collection!</button>
      <button>Cancel</button>
      </form>
      </div>
    )
  }
}

export default PlantNew;