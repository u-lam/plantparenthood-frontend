import React from 'react';

class User extends React.Component {

  state = {
    name: '',
    email: ''
  }

  render() {
    return (
      <div>
        This is the user profile
      </div>
    )
  }
}

export default User;