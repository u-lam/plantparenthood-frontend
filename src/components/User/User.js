import React from 'react';

class User extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    // password: ''
  }

  render() {
    return (
      <div></div>
      // <Card className='plantcard' >
      //   <CardContent>
      //     <Typography variant="body2" color="textSecondary">
      //       <h3>Name: {this.state.name}</h3>
      //       <h3>Sunlight: {this.state.sunlight}</h3>
      //       <h3>Water: {this.state.water}</h3>

      //       {this.props.plant.user 
      //       ? <h3>Owner: {this.state.owner}</h3>
      //       : <p></p>
      //       }
      //     </Typography>
      //   </CardContent>
      // </Card>
    )
  }
}

export default User;