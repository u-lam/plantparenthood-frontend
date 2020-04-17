import React from 'react';
import '../Plant/Plant.css';
import { Button, Card, CardContent, CardActions, IconButton, Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';


class PlantAdopt extends React.Component {

  state = {
    name: this.props.plant.name,
    sunlight: this.props.plant.sunlight,
    water: this.props.plant.water,
    owner: this.props.plant.user
  }

  render() {  
    return (
      <Card className='plantcard' >
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            <h3>Name: {this.state.name}</h3>
            <h3>Sunlight: {this.state.sunlight}</h3>
            <h3>Water: {this.state.water}</h3>

            {this.props.plant.user 
            ? <h3>Owner: {this.state.owner}</h3>
            : <p></p>
            }
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          
          {this.props.plant.user
          ? <>
              <Button size='small'>Donate</Button>
              <Button size='small'>Trade</Button> 
            </>  
          : <Button size='small'>Adopt Me!</Button>
          }
        </CardActions>
      </Card>        
    )
  }
}

export default PlantAdopt;