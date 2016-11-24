import React from 'react';
import NavBar from './NavBar.js';
import connect from 'react-redux';
import UserCard from './UserCard';

const Userlist = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className='title is-3'>Hello Im userlist</h3>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    );
  }
});

export default Userlist;
