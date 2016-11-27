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
          <div className='media-left'>
            <VoteBox votes={this.props.votes} type='comment' commentId={this.props.commentId} />
          </div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>{this.props.created_by}</strong> <small>@johnsmith</small> <small>{this.props.created_at}</small>
                <br />
                {this.props.body}
              </p>
            </div>
          </div>
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
