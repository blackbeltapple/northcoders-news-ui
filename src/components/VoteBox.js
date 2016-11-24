import React from 'react';

const VoteBox = React.createClass({
  render: function () {
    return (
      <div>
        <button>+</button>
        <button>-</button>
        <p>Votes: 9</p>
      </div>
    );
  }
});

export default VoteBox;
