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
    return (
      <div id='ArticleList'>
        <TopicBar />
        <p>filter is: {this.props.params.topic}</p>
        {this.props.articles.map(function (article, i) {
          return <ArticleCard title={article.title} votes={article.votes} id={article._id} key={i} />;
        })}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles(props.params.topic));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
