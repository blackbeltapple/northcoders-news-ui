/* global describe, it */
import {expect} from 'chai';
import actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import reducer from '../src/reducer/reducer';

const initialState = {
  articles: [],
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
    expect(newState.filter).to.equal('Football');
  });
});
