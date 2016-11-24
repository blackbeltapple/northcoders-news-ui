/* global describe, it */
import actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import {expect} from 'chai';

describe('actions.fetchArticleSuccess', function () {
  it('it is a function', function () {
    expect(actions.fetchArticleSuccess).to.be.a('function');
  });
  it('returns an object', function () {
    expect(actions.fetchArticleSuccess()).to.be.an('object');
  });
  it('has an FETCH_ARTICLES_SUCCESS type', function () {
    expect(types.FETCH_ARTICLES_SUCCESS).to.equal('FETCH_ARTICLES_SUCCESS');
  });
  it('takes 1 argument', function () {
    expect(actions.fetchArticleSuccess.length).to.equal(1);
  });
});
describe('actions.fetchArticleRequest', function () {
  it('it is a function', function () {
    expect(actions.fetchArticleRequest).to.be.a('function');
  });
  it('returns an object', function () {
    expect(actions.fetchArticleRequest()).to.be.an('object');
  });
  it('has an FETCH_ARTICLES_REQUEST type', function () {
    expect(types.FETCH_ARTICLES_REQUEST).to.equal('FETCH_ARTICLES_REQUEST');
  });
  it('takes 1 argument', function () {
    expect(actions.fetchArticleRequest.length).to.equal(0);
  });
});
describe('actions.fetchArticleError', function () {
  it('it is a function', function () {
    expect(actions.fetchArticleError).to.be.a('function');
  });
  it('returns an object', function () {
    expect(actions.fetchArticleError()).to.be.an('object');
  });
  it('has an FETCH_ARTICLES_ERROR type', function () {
    expect(types.FETCH_ARTICLES_ERROR).to.equal('FETCH_ARTICLES_ERROR');
  });
  it('takes 1 argument', function () {
    expect(actions.fetchArticleError.length).to.equal(1);
  });
});
