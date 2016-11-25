/* global describe, it */
import {expect} from 'chai';
import actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import reducer from '../src/reducer/reducer';

const initialState = {
  articles: [],
  comments: [],
  selectedTopic: null,
  loading: false,
  error: null,
  topics: [],
  filter: ''
};

describe('reducer', function () {
  it('changes the filter property on the state', function () {
    var state = reducer(initialState);
    expect(state.filter).to.equal('');
    var myAction = actions.setFilter('Football');
    var newState = reducer(initialState, myAction);
    expect(newState.filter).to.equal('football');
  });
});
describe('reducer', function () {
  it('adds a comment to the comments array on the state', function () {
    var state = reducer(initialState);
    var result = [
      { body: 'Tague',  id: 'Hello' },
      { body: 'Amanda',  id: 'Coolio' }
    ]
    expect(state.comments).to.eql([]);
    var myAction = actions.addComment('Tague', 'Hello');
    var newState = reducer(initialState, myAction);
    var myAction2 = actions.addComment('Amanda', 'Coolio');
    newState = reducer(newState, myAction2);
    expect(newState.comments).to.eql(result);
  });
});
