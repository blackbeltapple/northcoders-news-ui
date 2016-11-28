import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';
import ArticleCard from './ArticleCard';

const ArticleList = React.createClass({
  componentWillMount () {
    // console.log('componentwillMount ArticleList');
    // how to get params in here for when user comes direct to URL
    // Need to see Harriet's link on how to do this
    this.props.fetchArticles(this.props.filter);
  },

  // filteredArticles () {
  //   if (this.props.filter === '') {
  //     return this.props.articles;
  //   }
  //   let filteredArticles = this.props.articles.filter((article) => {
  //     return this.props.filter === article.belongs_to;
  //   });
  //   return filteredArticles;
  // },

  render () {
    // console.log('ArticleList render');
    // let filtered = this.filteredArticles();
    let filtered = this.props.articles;
    return (
      <div id='ArticleList'>
        {filtered.map((article, i) => {
          return <ArticleCard
            title={article.title}
            votes={article.votes}
            articleId={article._id}
            belongs_to={article.belongs_to}
            created_by={article.created_by}
            comments={article.comments}
            key={i} />;
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
    fetchArticles: (topic) => {
      dispatch(actions.fetchArticles(topic));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
