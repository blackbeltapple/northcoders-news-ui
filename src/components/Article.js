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
      return article._id === this.props.params.article;
    });
    return find;
  },
  render: function () {
    let article = this.findArticle()[0];

    return (
      <div className='box'>
        <h1 className='title is-3'>{article.title}</h1>
        <p className='title is-5'>{article.body}</p>
        <p className='title is-6'>Created by: {article.created_by}</p>
        <p className='title is-6'>Comments: {article.comments}</p>
        <CommentList id={this.props.params.article} />
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
