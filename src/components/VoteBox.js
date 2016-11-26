import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';


const VoteBox = React.createClass({
  handleUp: function () {
    console.log('up');
  },

  handleDown: function () {
    console.log('down', this.props.type,  this.props.articleId, this.props.commentId );
    this.props.editVote(this.props.type, this.props.articleId);

  },

  render: function () {
    // let comment = this.props.commentId;
    // let article = this.props.articleId;
    // let type = this.props.type;
    let votes = this.props.votes;
    return (
      <div>
        <button onClick={this.handleUp}>+</button>
        <p>{votes}</p>
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
