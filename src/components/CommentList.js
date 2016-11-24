import React from 'react';
import NavBar from './NavBar.js';
import connect from 'react-redux';
import CommentCard from './CommentCard';

const CommentList = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className='title is-3'>CommentList</h3>
        <CommentCard />
      </div>
    );
  }
});

export default CommentList;
