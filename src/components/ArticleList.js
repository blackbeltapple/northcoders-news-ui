import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import TopicBar from './TopicBar.js';
import ArticleCard from './ArticleCard';

const ArticleList = React.createClass({
  componentWillMount () {
    this.props.fetchArticles();
  },
  render () {
    // this.props.params.topic
    return (
      <div id='ArticleList'>
        {console.log('this.props.filter in ArticleList', this.props.filter)}
        {this.props.articles.map(function (article, i) {
          return <ArticleCard title={article.title} votes={article.votes} id={article._id} key={i} />;
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
      dispatch(actions.fetchArticles(props.filter));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
