import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';


const VoteBox = React.createClass({
  getInitialState: function () {
    return {
      votes: this.props.votes
    }
  },
  handleUp: function () {
    console.log('handleUp', this.state.votes)
    this.props.editVote(this.props.type, this.props.articleId, 'up');
    this.setState({
      votes: this.state.votes + 1
    });
  },

  handleDown: function () {
    this.props.editVote(this.props.type, this.props.articleId, 'down');
    this.setState({
      votes: this.state.votes - 1
    });

  },

  render: function () {
    // let votes = this.props.votes;
    // <p className='has-text-centered'>{this.props.votes}</p>
    console.log('VoteBox render')
    return (
      <div>
        <button onClick={this.handleUp}>+</button>
        <p className='has-text-centered'>{this.state.votes}</p>
        <button onClick={this.handleDown}>-</button>
      </div>
    );
  }
});

function mapDispatchToProps (dispatch, props) {
  return {
    editVote: (type, ID, upOrDown) => {
      dispatch(actions.editVote(type, ID, upOrDown));
    }
  };
};

export default connect(null, mapDispatchToProps)(VoteBox);
