import React from 'react';

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
              <h3 className='title is-3'>Im a massive tremendous fool</h3>
            </div>
          </div>
        </article>
      </div>
    )
  }
})

export default UserCard;
