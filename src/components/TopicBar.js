import React from 'react';
import {Link} from 'react-router';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <h3>TopicBar</h3>
        <Link to='/topics/cooking/articles'>Cooking</Link>
        <Link to='/topics/coding/articles'>Coding</Link>
        <Link to='/topics/football/articles'>Football</Link>
      </div>
    );
  }
});

export default App;
