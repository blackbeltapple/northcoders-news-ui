import React from 'react';

const User = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className='title is-3'>Hello Im {this.props.params.user} and Im a user</h3>
      </div>
    )}
});

export default User;
