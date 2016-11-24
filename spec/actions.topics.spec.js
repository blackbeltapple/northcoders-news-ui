/* global describe, it */
import actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import {expect} from 'chai';

describe('actions.fetchTopicsSuccess', function () {
  it('it is a function', function () {
    expect(actions.fetchTopicsSuccess).to.be.a('function');
  });
  it('returns an object', function () {
    expect(actions.fetchTopicsSuccess()).to.be.an('object');
  });
  it('has an FETCH_TOPICS_SUCCESS type', function () {
    expect(types.FETCH_TOPICS_SUCCESS).to.equal('FETCH_TOPICS_SUCCESS');
  });
  it('takes 1 argument', function () {
    expect(actions.fetchTopicsSuccess.length).to.equal(1);
  });
});
describe('actions.fetchTopicsRequest', function () {
  it('it is a function', function () {
    expect(actions.fetchTopicsRequest).to.be.a('function');
  });
  it('returns an object', function () {
    expect(actions.fetchTopicsRequest()).to.be.an('object');
  });
  it('has an FETCH_TOPICS_REQUEST type', function () {
    expect(types.FETCH_TOPICS_REQUEST).to.equal('FETCH_TOPICS_REQUEST');
  });
  it('takes 1 argument', function () {
    expect(actions.fetchTopicsRequest.length).to.equal(0);
  });
});
describe('actions.fetchTopicsError', function () {
  it('it is a function', function () {
    expect(actions.fetchTopicsError).to.be.a('function');
  });
  it('returns an object', function () {
    expect(actions.fetchTopicsError()).to.be.an('object');
  });
  it('has an FETCH_TOPICS_ERROR type', function () {
    expect(types.FETCH_TOPICS_ERROR).to.equal('FETCH_TOPICS_ERROR');
  });
  it('takes 1 argument', function () {
    expect(actions.fetchTopicsError.length).to.equal(1);
  });
});
