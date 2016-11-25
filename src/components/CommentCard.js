import React from 'react';
import {connect} from 'react-redux';
import VoteBox from './VoteBox';

const CommentCard = React.createClass ({
  render () {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            
          </div>
          <div className='media-content'>
            <div className='content'>
              <h3 className='title is-3'>Comment Card</h3>
            </div>
          </div>
        </article>
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentCard);
