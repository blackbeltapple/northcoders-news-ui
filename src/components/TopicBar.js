import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import actions from '../actions/actions';
import ArticleList from './ArticleList';

const TopicBar = React.createClass({
  componentWillMount: function () {
    this.props.fetchTopics();
  },

  changeTopic: function (event) {
    this.props.setFilter(event.target.value);
  },

  renderTopics: function () {
    // let that = this;
    return (
        this.props.topics.map((topic, i) => {
          return (
            <Link to={`/topics/${topic.title.toLowerCase()}/articles`} key={i} ><button value={topic.title} onClick={this.changeTopic}>{topic.title}</button></Link>
          );
        })
    );
  },

  render: function () {
    return (
      <div>
        <Link to={`/articles`}><button value={''} key={100} onClick={this.changeTopic}>All Articles</button></Link>
        {this.renderTopics()}
        <ArticleList />
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    topics: state.topics,
    filter: state.filter
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchTopics: () => {
      dispatch(actions.fetchTopics(props));
    },
    setFilter: (value) => {
      dispatch(actions.setFilter(value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicBar);
