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

function mapStateToProps (state) {
  return {
    filter: state.filter
  };
}

export default connect(mapStateToProps)(App);
