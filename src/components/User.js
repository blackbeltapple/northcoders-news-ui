import React from 'react';
// import ProfileCard from './ProfileCard.js';
// import ArticleList from './ArticleList.js';
import actions from '../actions/actions';
import {connect} from 'react-redux';


const User = React.createClass({
  componentWillMount: function () {
    this.props.fetchUserProfile(this.props.params.username);
  },

  render: function () {
    //  ${this.props.username}, ${this.props.avatar_url}
    // console.log('render', this.props.users);
    return (
      <div>
        <p >Params: {this.props.params.username}</p>
          <p >Username: {this.props.users[0].username}</p>
          <p >Name: {this.props.users[0].name}</p>
          <p >Avatar: {this.props.users[0].avatar_url}</p>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    loading: state.loading,
    users: state.users
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchUserProfile: (username) => {
      dispatch(actions.fetchUserProfile(username));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
