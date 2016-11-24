import React from 'react';
import VoteBox from './VoteBox.js';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p><VoteBox /></p>
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>{props.title}</h3>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ArticleCard;
