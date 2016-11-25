import React from 'react';

const VoteBox = React.createClass({
  render: function () {
    return (
      <div>
        <button>+</button>
        <p>{this.props.votes}</p>
        <button>-</button>
      </div>
    );
  }
});

export default VoteBox;
