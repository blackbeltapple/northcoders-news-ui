import React from 'react';
import {connect} from 'react-redux';
import CommentCard from './CommentCard';
import actions from '../actions/actions';
import CommentForm from './CommentForm';

const CommentList = React.createClass({
  componentWillMount: function () {
    this.props.fetchComments(this.props.id);
  },
  renderCommments: function () {
    if (this.props.loading === true) {
      return 'Hello';
    }
    let find = this.props.comments.map((comment, i) => {
      return <CommentCard body={comment.body} commentId={comment._id} created_by={comment.created_by} votes={comment.votes} created_at={comment.created_at} belongs_to={comment.belongs_to} key={i} />;
    });
    return find;
  },
  render: function () {
    return (
      <div>
        <CommentForm articleID={this.props.id} />
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
