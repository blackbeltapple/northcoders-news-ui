import React from 'react';
import CommentList from './CommentList';
import {connect} from 'react-redux';
import actions from '../actions/actions';

const Article = React.createClass({
  componentWillMount: function () {
    this.props.fetchArticles();
  },
  findArticle: function () {
    if (this.props.loading === true) {
      return 'Helloooooooo';
    }
    let find = this.props.articles.filter((article) => {
      return article._id === this.props.params.article.toLowerCase();
    });
    return find;
  },
  render: function () {
    console.log('Article render');
    let article = this.findArticle()[0];
    return (
      <div className='box'>
        <h1 >{article.title}</h1>
        <p >{article.body}</p>
        <p >{article._id}</p>
        <p >Created by: {article.created_by}</p>
        <p >Comments: {article.comments}</p>
        <p >Votes: {article.votes}</p>
        <CommentList id={this.props.params.article.toLowerCase()} />
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
