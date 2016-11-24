import * as types from './types';
import request from 'superagent';

import { ROOT } from '../../config';

export function fetchArticles () {
  return (dispatch) => {
    dispatch({ type: types.FETCH_ARTICLES_REQUEST });
    request
      .get(`${ROOT}/articles`)
      .end((err, res) => {
        if (err) dispatch({ type: types.FETCH_ARTICLES_ERROR, err });
        else dispatch({ type: types.FETCH_ARTICLES_SUCCESS, data: res.body });
      });
  }
}

export function fetchTopics () {
  return (dispatch) => {
    dispatch({ type: types.FETCH_TOPICS_REQUEST });
    request
      .get(`${ROOT}/topics`)
      .end((err, res) => {
        if (err) dispatch({ type: types.FETCH_TOPICS_ERROR, err });
        else dispatch({ type: types.FETCH_TOPICS_SUCCESS, data: res.body });
      });
  }
}

export const fetchArticleSuccess = function (data) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: data
  }
}
export const fetchArticleRequest = function () {
  return {
    type: types.FETCH_ARTICLES_SUCCESS
  }
}
export const fetchArticleError = function (error) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    error: error
  }
}
export const fetchTopicsSuccess = function (data) {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    data: data
  }
}
export const fetchTopicsRequest = function () {
  return {
    type: types.FETCH_TOPICS_REQUEST
  }
}
export const fetchTopicsError = function (error) {
  return {
    type: types.FETCH_TOPICS_ERROR,
    error: error
  }
}
