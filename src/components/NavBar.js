import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
  render: function () {
    console.log('NavBar render')
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <figure className="image is-128x128">
              <img src="http://www.thesharpproject.co.uk/assets/Northcoders_gallery.png" alt="Northcoders"  />
            </figure>
          </div>
          <div className="nav-center">
            <a className="nav-item" href="#">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
            </a>
            <a className="nav-item" href="#">
              <span className="icon">
                <i className="fa fa-twitter"></i>
              </span>
            </a>
          </div>
          <div className="nav-right nav-menu">
            <a className="nav-item" href="#">
              Home
            </a>
            <a className="nav-item" href="#">
              Documentation
            </a>
            <a className="nav-item" href="#">
              Blog
            </a>
          </div>
        </nav>
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item is-tab is-active"><Link to='/'>Articles</Link></a>
              <a className="nav-item is-tab"><Link to='/userlist'>Users</Link></a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

export default NavBar;
