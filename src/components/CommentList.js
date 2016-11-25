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
  renderCommments: function () {
    if (this.props.loading === true) {
      return 'Hello';
    }
    let find = this.props.comments.map((comment) => {
      return <CommentCard body={comment.body} created={comment.created_by} votes={comment.votes} createdAt={comment.created_at}/>;
    });
    return find;
  },
  render: function () {
    return (
      <div>
        {this.renderCommments()}
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
