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
import Userlist from './components/Userlist';
import User from './components/User';
import TopicBar from './components/TopicBar';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TopicBar} />
      <Route path='/articles' component={TopicBar}></Route>
      <Route path='/topics/:topic/articles' component={TopicBar}></Route>
      <Route path='/articles/:article' component={Article}></Route>
      <Route path='/userlist' component={Userlist}></Route>
      <Route path='/userlist/:user' component={User}></Route>
    </Route>
  </Router>
</Provider>, document.getElementById('app'));
