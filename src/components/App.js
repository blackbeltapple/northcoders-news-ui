import React from 'react';
import NavBar from './NavBar.js';
import {connect} from 'react-redux';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

export default App;
