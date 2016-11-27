import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
  render: function () {
    console.log('NavBar render')
    return (
      <div>
        <Link to='/'>Articles</Link>
        <Link to='/userlist'>Users</Link>
      </div>
    );
  }
});

export default NavBar;
