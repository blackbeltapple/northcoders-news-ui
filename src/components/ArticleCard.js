import React from 'react';
import VoteBox from './VoteBox.js';
import {Link} from 'react-router';

const ArticleCard = function (props) {
  let articleId = props.articleId;
  // console.log('ArticleCard render');
  return (
    <div className='box'>
      <article className="media">
        <div className='media-left'>
          <VoteBox votes={props.votes} type='article' articleId={articleId} />
        </div>
        <div className='media-content'>
          <div className='content'>
            <strong><Link to={`/articles/${props.articleId}`}>{props.votes + ' ' + props.title}</Link></strong><small>{props.created_by}</small>
              {props.body}
              <br /><small>Topic: {props.belongs_to}</small>
              <br /><small>Comments: {props.comments}</small>
          </div>
        </div>
      </article >
    </div>
  );
};

export default ArticleCard;
