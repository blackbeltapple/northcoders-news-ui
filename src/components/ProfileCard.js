import React from 'react';

const ProfileCard = React.createClass ({
  render () {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <p>HERE IS ANOTHER</p>
          </div>
          <div className='media-content'>
            <div className='content'>
              <h3 className='title is-3'>User Profile</h3>
            </div>
          </div>
        </article>
      </div>
    );
  }
});

export default ProfileCard;
