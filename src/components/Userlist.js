import React from 'react';
import {connect} from 'react-redux';
import UserCard from './UserCard';
import actions from '../actions/actions';

const UserList = React.createClass({
  componentWillMount: function () {
    this.props.fetchUsers();
  },

  render: function () {
    // console.log('this.props.users', this.props.users);
    if (this.props.loading === true) {
      return (
        <a className="button is-primary is-loading">
          Button
        </a>
      )
    }
    //
    return (
      <div id='UserList' className='box'>
        <h3 className='title is-5'>User List</h3>
        {
          this.props.users.map((user, i) => {
            // console.log(user.name);
            return <UserCard
              name={user.name}
              username={user.username}
              url={user.avatar_url}
              key={i} />;
          })
        }
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchUsers: () => {
      dispatch(actions.fetchUsers());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
