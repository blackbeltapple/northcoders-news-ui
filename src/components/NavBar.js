import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
  render: function () {
    console.log('NavBar render')
    return (
      // <div>
      //   <Link to='/'>Articles</Link>
      //   <Link to='/userlist'>Users</Link>
      // </div>
      //

      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item is-tab is-active"><Link to='/'>Articles</Link></a>
            <a className="nav-item is-tab"><Link to='/userlist'>Users</Link></a>
          </div>
        </div>
      </nav>

    );
  }
});

export default NavBar;
