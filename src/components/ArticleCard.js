import React from 'react';
import VoteBox from './VoteBox.js';
import {Link} from 'react-router';

const ArticleCard = function (props) {
  let articleId = props.articleId;
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p><VoteBox votes={props.votes} type='article' articleId={articleId} /></p>
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={`/articles/${props.articleId}`}>{props.title}</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
