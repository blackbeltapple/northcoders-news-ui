import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/App';
import reducer from './reducer/reducer';
import Article from './components/Article';
import UserList from './components/Userlist';
import User from './components/User';
import TopicBar from './components/TopicBar';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TopicBar} />
      <Route path='/articles' component={TopicBar} />
      <Route path='/topics/:topic/articles' component={TopicBar} />
      <Route path='/articles/:article' component={Article} />
      <Route path='/userlist' component={UserList} />
      <Route path='/userlist/:user' component={User} />
      <Route path='/users/:username' component={User} />
    </Route>
  </Router>
</Provider>, document.getElementById('app'));
