import React from 'react';
import ProfileCard from './ProfileCard.js';
import ArticleList from './ArticleList.js';

const User = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className='title is-3'>Hello Im {this.props.params.user} and Im a user</h3>
        <ProfileCard />
        <ArticleList />
      </div>
    )}
});

export default User;
