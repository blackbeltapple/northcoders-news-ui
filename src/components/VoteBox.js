import React from 'react';

const VoteBox = React.createClass({
  render: function () {
    return (
      <div>
        <button onClick={console.log('hello!')}>+</button>
        <button onClick={console.log('hello!')}>-</button>
        <p>Votes: 9</p>
      </div>
    );
  }
});

export default VoteBox;
