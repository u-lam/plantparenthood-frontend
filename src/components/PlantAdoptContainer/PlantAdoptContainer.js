import React from 'react';
import PlantAPI from '../../api/PlantAPI';
import { Container }  from '@material-ui/core';
import PlantAdopt from '../PlantAdopt/PlantAdopt';


class PlantAdoptContainer extends React.Component {

  state = {
    plants: [],
    currentUser: '',
  }

  // handleAdopt = () => {

  // }


  componentDidMount() {
    PlantAPI.index()
    .then(res => {
      this.setState({ 
        plants: res.data,
        currentUser: this.props.user
      })
    })
  }

  render() {
    let plants = this.state.plants;
    console.log('plantadopt container logged in user: ' , this.props.user)
    console.log(plants)
   
    return (
      <div>
        <h3>Plants to Adopt Container</h3>
        <Container className='plantcontainer'
            style={{ backgroundColor: '#cfe8fc', height: '100%', width: '80vw',
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'spacearound', flexGrow: 1 }}>
            {plants && plants.map(plant => {
              return (
                <div key={plant._id}>
                  {!plant.user
                  ? <PlantAdopt plant={plant} key={plant._id}
                    handleUpdate={this.handleUpdate}
                    handleDelete={this.handleDelete}
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

export default PlantAdoptContainer;