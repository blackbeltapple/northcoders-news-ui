import React from 'react';
import {connect} from 'react-redux';
import VoteBox from './VoteBox';
import actions from '../actions/actions';


const CommentCard = React.createClass({
  // type='comment' commentId={this.props.commentId}

  handleDelete: function () {
    console.log('delete');
    this.props.deleteComment(this.props.commentId);

  },

  render () {
    return (
      <div className='box'>
        <VoteBox votes={this.props.votes} type='comment' commentId={this.props.commentId} />
        <p className='title is-3'>Body: {this.props.body}</p>
        <p className='title is-5'>Created by: {this.props.created_by}</p>
        <p className='title is-5'>Created at: {this.props.created_at}</p>
        <p className='title is-5'>_id: {this.props.commentId}</p>
        <p className='title is-5'>Belongs to article: {this.props.belongs_to}</p>
        {this.props.created_by === 'northcoder' ? <button onClick={this.handleDelete}>delete comment</button> : <p></p> }
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    deleteComment: (commentId) => {
      dispatch(actions.deleteComment(commentId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCard);
