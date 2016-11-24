import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';



const TopicBar = React.createClass({
  componentWillMount: function () {
    this.props.fetchTopics();
  },

  renderTopics: function () {
    return (
        this.props.topics.map( function (topic) {
          return (
            <Link to={`/topics/${topic.title}/articles`} >{topic.title}</Link>
          )
        })
    )
  },

  render: function () {
    console.log('this.props.topics', this.props.topics);
    return (
      <div>
        {this.renderTopics()}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    topics: state.topics
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchTopics: () => {
      dispatch(actions.fetchTopics(props));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicBar);
