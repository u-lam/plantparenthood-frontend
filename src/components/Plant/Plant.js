import React from 'react';
import './Plant.css';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
      // <div >
        <Card className='plantcard' >
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              <h3>Name: {this.state.name}</h3>
              <h3>Sunlight: {this.state.sunlight}</h3>
              <h3>Water: {this.state.water}</h3>
              <h3>Owner: {this.state.owner}</h3>
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button size='small'>Donate</Button>
            <Button size='small'>Trade</Button>
          </CardActions>
        </Card>        

      // </div>
    )
  }
}

export default Plant;