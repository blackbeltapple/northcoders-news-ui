/* global describe, it */
import actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import {expect} from 'chai';

describe('actions.setFilter', function () {
  it('it is a function', function () {
    expect(actions.setFilter).to.be.a('function');
  });
  it('returns an object', function () {
    expect(actions.setFilter()).to.be.an('object');
  });
  it('has an SET_FILTER type', function () {
    expect(types.SET_FILTER).to.equal('SET_FILTER');
  });
  it('takes 1 argument', function () {
    expect(actions.setFilter.length).to.equal(1);
  });
});
