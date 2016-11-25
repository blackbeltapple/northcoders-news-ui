import React from 'react';
import CommentList from './CommentList';
import {connect} from 'react-redux';
import actions from '../actions/actions';
import VoteBox from './VoteBox';

const Article = React.createClass({
  componentWillMount: function () {
    this.props.fetchArticles();
  },
  findArticle: function () {
    if (this.props.loading === true) {
      return 'Helloooooooo';
    }
    let find = this.props.articles.filter((article) => {
      return article._id === this.props.params.article;
    });
    return find;
  },
  render: function () {
    let article = this.findArticle()[0];

    return (
      <div className='box'>
        <h1 className='title is-2'>{article.title}</h1>
        <p className='title is-4'>{article.body}</p>
        <p className='title is-5'>Created by: {article.created_by}</p>
        <p className='title is-5'>Comments: {article.comments}</p>
        <CommentList id={this.props.params.article}/>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    loading: state.loading,
    articles: state.articles
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
