import React from 'react';
import VoteBox from './VoteBox.js';
import {Link} from 'react-router';

const ArticleCard = function (props) {
  let articleId = props.articleId;
  console.log('ArticleCard render');

  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <VoteBox votes={props.votes} type='article' articleId={articleId} />
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={`/articles/${props.articleId}`}>{props.votes + ' ' + props.title}</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
