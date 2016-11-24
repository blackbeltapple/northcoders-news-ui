import React from 'react';
import CommentList from './CommentList';

const User = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className='title is-3'>{this.props.params.article}</h3>
        <CommentList />
      </div>
    );
  }
});

export default User;
