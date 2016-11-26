import React from 'react';
import {Link} from 'react-router';

const UserCard = React.createClass({
  render () {
    return (
      <div className='box'>
        <h3 className='title is-3' ><Link to={`/users/${this.props.username}`} >{this.props.name}</Link></h3>
        <h3 className='title is-3' >{this.props.username}</h3>

      </div>
    );
  }
});

export default UserCard;
