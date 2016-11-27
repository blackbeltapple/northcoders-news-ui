import React from 'react';
import {Link} from 'react-router';

const UserCard = React.createClass({
  render () {
    return (
      <div className='box'>
        <article className="media">
          <div className='media-left'>
          </div>
          <div className='media-content'>
            <div className='content'>
              <strong><Link to={`/users/${this.props.username.toLowerCase()}`} >{this.props.name}</Link></strong><small></small>

                <br /><small>{this.props.username}</small>
                <br /><small> </small>
            </div>
          </div>
        </article >
      </div>
    );
  }
});

export default UserCard;
