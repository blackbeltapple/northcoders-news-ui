import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
  render: function () {
    return (
      <div>
        <Link to='/Articles'>Articles</Link>
        <Link to='/userlist'>Users</Link>
      </div>
    );
  }
});

export default NavBar
