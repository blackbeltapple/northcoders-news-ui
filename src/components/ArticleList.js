import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';

import ArticleCard from './ArticleCard';

const ArticleList = React.createClass({
  componentWillMount () {
    this.props.fetchArticles();
  },
  filteredArticles () {
    if (this.props.filter === '') {
      return this.props.articles;
    }
    let filteredArticles = this.props.articles.filter((article) => {
      return this.props.filter === article.belongs_to;
    });
    return filteredArticles;
  },
  render () {
    console.log('ArticleList render')
    let filtered = this.filteredArticles();
    return (
      <div id='ArticleList'>
        {filtered.map((article, i) => {
          return <ArticleCard title={article.title} votes={article.votes} articleId={article._id} key={i} />;
        })}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    articles: state.articles,
    filter: state.filter
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles(props.articles));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
