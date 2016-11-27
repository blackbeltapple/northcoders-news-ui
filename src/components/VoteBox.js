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
    this.props.editVote(this.props.type, this.props.articleId);
    this.setState({
      votes: this.state.votes + 1
    });
  },

  handleDown: function () {
    this.props.editVote(this.props.type, this.props.articleId);
    this.setState({
      votes: this.state.votes - 1
    });

  },

  render: function () {
    // let comment = this.props.commentId;
    // let article = this.props.articleId;
    // let type = this.props.type;
    // let votes = this.props.votes;
    // console.log('Votebox render')
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
    editVote: (type, ID) => {
      dispatch(actions.editVote(type, ID));
    }
  };
};

export default connect(null, mapDispatchToProps)(VoteBox);
