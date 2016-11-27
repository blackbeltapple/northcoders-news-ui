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
      <div className="box">
        <article className="media">
          <div className="media-left">
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong className='title is-4'>{article.title}</strong>
                <br />
                {article.body}
                <br />
                <small>Created by: {article.created_by}</small>
                <br />
                <small>Comments: {article.comments}</small>
              </p>
            </div>
          </div>
        </article>
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
