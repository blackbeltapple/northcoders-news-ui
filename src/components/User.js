import React from 'react';
import NavBar from './NavBar.js';

const User = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className='title is-3'>{this.props.params.user}</h3>
      </div>
    );
  }
});

export default User;
