import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ArticleList from './ArticleList';

const TopicBar = React.createClass({
  getInitialState: function () {
    return {
      filter: ''
    };
  },
  componentWillMount: function () {
    this.props.fetchTopics();
  },

  changeTopic: function (event) {
    this.props.setFilter(event.target.value);
  },

  renderTopics: function () {
    let that = this;
    return (
        this.props.topics.map(function (topic) {
          return (
            <Link to={`/topics/${topic.title}/articles`}><button value={topic.title} onClick={that.changeTopic}>{topic.title}</button></Link>
          );
        })
    );
  },

  render: function () {
    console.log('this.props.filter is ' + this.props.filter);
    return (
      <div>
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
    setFilter: (filter) => {
      dispatch(actions.setFilter(props.filter));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicBar);
