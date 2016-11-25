import React from 'react';
import NavBar from './NavBar.js';
import {connect} from 'react-redux';
import CommentCard from './CommentCard';
import actions from '../actions/actions';
import VoteBox from './VoteBox';

const CommentList = React.createClass({
  componentWillMount: function () {
    this.props.fetchComments(this.props.id);
  },
  render: function () {
    return (
      <div>
        {this.props.comments.map((comment) => {
          return <CommentCard />;
        })}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    loading: state.loading,
    comments: state.comments
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchComments: (value) => {
      dispatch(actions.fetchComments(value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
