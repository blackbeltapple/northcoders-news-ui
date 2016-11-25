import React from 'react';
import NavBar from './NavBar.js';
import {connect} from 'react-redux';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {console.log('In app filter ' + this.props.filter)}
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
