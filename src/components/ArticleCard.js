import React from 'react';
import VoteBox from './VoteBox.js';
import {Link} from 'react-router';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p><VoteBox /></p>
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'><Link to={`/articles/${props.id}`}>{props.title}</Link></h3>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ArticleCard;
