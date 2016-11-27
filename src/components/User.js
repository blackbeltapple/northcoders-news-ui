import React from 'react';
// import ProfileCard from './ProfileCard.js';
// import ArticleList from './ArticleList.js';
import actions from '../actions/actions';
import {connect} from 'react-redux';

const User = React.createClass({
  componentWillMount: function () {
    this.props.fetchUserProfile(this.props.params.username.toLowerCase());
    // this.props.fetchUserRepos(this.props.params.username);
  },

  render: function () {
    //  ${this.props.username}, ${this.props.avatar_url}
    // console.log('render', this.props.users);
    return (
      <div className='card'>
        <div className='card-image'>
          <img src={this.props.users[0].avatar_url} alt="" />
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className="media-content">
              <p className="title is-5">{this.props.users[0].name}</p>
              <p className="subtitle is-6">{this.props.params.username}</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            <br />
          </div>
        </div>
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
    fetchUserProfile: (username) => { dispatch(actions.fetchUserProfile(username)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
