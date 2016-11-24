import React from 'react';
import {Link} from 'react-router';

const UserCard = React.createClass ({
  render () {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <p>Hi Im bob, nice to meet you</p>
          </div>
          <div className='media-content'>
            <div className='content'>
              // /userlist/:user
              <h3 className='title is-3'><Link to={`/userlist/bob`}>Im a massive tremendous fool</Link></h3>
            </div>
          </div>
        </article>
      </div>
    )
  }
})

export default UserCard;
