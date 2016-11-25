import React from 'react';
import VoteBox from './VoteBox.js';
import {Link} from 'react-router';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p><VoteBox votes={props.votes} /></p>
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={`/articles/${props.id}`}>{props.title}</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
