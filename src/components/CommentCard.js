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
        <article className="media">
          <div className='media-left'>
            <VoteBox votes={this.props.votes} type='comments' id={this.props.commentId} />
          </div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>{this.props.created_by}</strong> <small>Created at: {this.props.created_at}</small>
                <br />
                {this.props.body}
                <br />
                {this.props.created_by === 'northcoder' ? <button  key={100} onClick={this.handleDelete}>delete comment</button> : <br />}
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    comments: state.comments,
    loading: state.loading
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
