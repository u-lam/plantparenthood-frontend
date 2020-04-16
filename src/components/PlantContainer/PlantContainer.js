import React from 'react';
import PlantAPI from '../../api/PlantAPI';
// import './PlantContainer.css';
import Plant from '../Plant/Plant';
import PlantNew from '../PlantNew/PlantNew';
import { Container, IconButton, Modal }  from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});


class PlantContainer extends React.Component {

  state = {
    plants: [],
    showModal: false,
  }

  showModal = () => {
    console.log('opening modal')
    this.setState({ showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
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
    const { classes } = this.props;

    return (
      <div>
        {/* MODAL TO ADD NEW PLANT, DATA PASSED TO PLANTNEW COMPONENT */}
        <Container>
          <h3>My Plant Container</h3>
          <IconButton style={{ color: "#00897b" }}>
            <AddCircleOutlineIcon onClick={this.showModal}/>
          </IconButton>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal} open={this.state.showModal}
            onClose={this.hideModal} closeAfterTransition
            BackdropComponent={Backdrop} BackdropProps={{ timeout: 500  }}
            >
            <Fade in={this.state.showModal}>
              <PlantNew handleAPICreate={this.handleAPICreate} hideModal={this.hideModal}/>
            </Fade>
          </Modal>
        </Container>
        <br></br>

        {/* PASSING DATA TO PLANT COMPONENT */}
        <Container className='plantcontainer'
            style={{ backgroundColor: '#cfe8fc', height: '100%', width: '80vw',
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
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

export default withStyles(styles)(PlantContainer);
