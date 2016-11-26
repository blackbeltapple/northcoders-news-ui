import React from 'react';
import {connect} from 'react-redux';
import VoteBox from './VoteBox';

const CommentCard = React.createClass({
  render () {
    return (
      <div className='box'>
        <VoteBox votes={this.props.votes} />
        <p className='title is-3'>{this.props.body}</p>
        <p className='title is-5'>{this.props.created}</p>
        <p className='title is-5'>{this.props.createdAt}</p>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentCard);
