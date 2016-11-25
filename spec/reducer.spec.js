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
  it('changes the filter property on the state', function () {
    var state = reducer(initialState);
    expect(state.comments).to.eql([]);
    var myAction = actions.addComment('Tague', 'Hello', 'f');
    var newState = reducer(initialState, myAction);
    var myAction2 = actions.addComment('Amanda', 'Coolio', 'f');
    newState = reducer(initialState, myAction2);
    console.log(newState.comments);
    expect(newState.filter).to.equal([ { body: 'Hello', created_by: 'Tague', votes: 0, belongs_to: 'f' },
  { body: 'Coolio',
    created_by: 'Amanda',
    votes: 0,
    belongs_to: 'f' } ]
);
  });
});
