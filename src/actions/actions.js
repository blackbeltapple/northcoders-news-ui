import * as types from './types';
import request from 'superagent';
import { ROOT } from '../../config';

const actions = {};

actions.fetchArticles = function () {
  return (dispatch) => {
    dispatch({ type: types.FETCH_ARTICLES_REQUEST });
    request
      .get(`${ROOT}/articles`)
      .end((err, res) => {
        if (err) dispatch({ type: types.FETCH_ARTICLES_ERROR, err });
        else dispatch({ type: types.FETCH_ARTICLES_SUCCESS, data: res.body });
      });
  };
};

actions.fetchTopics = function () {
  return (dispatch) => {
    dispatch({ type: types.FETCH_TOPICS_REQUEST });
    request
      .get(`${ROOT}/topics`)
      .end((err, res) => {
        if (err) dispatch({ type: types.FETCH_TOPICS_ERROR, err });
        else dispatch({ type: types.FETCH_TOPICS_SUCCESS, data: res.body });
      });
  };
};

actions.fetchComments = function (id) {
  let articleId = id;
  return (dispatch) => {
    dispatch({ type: types.FETCH_COMMENTS_REQUEST });
    request
      .get(`${ROOT}/articles/${articleId}/comments`)
      .end((err, res) => {
        if (err) dispatch({ type: types.FETCH_TOPICS_ERROR, err });
        else dispatch({ type: types.FETCH_COMMENTS_SUCCESS, data: res.body });
      });
  };
};

actions.addComment = function (body, id) {

  let newComment = {
    type: types.ADD_COMMENT_REQUEST,
    body: body,
    id: id
  };
  return newComment;
  // return (dispatch) => {
  //   dispatch({ type: types.ADD_COMMENT });
  //   request
  //     .post(`${ROOT}/articles/${articleId}/comments`)
  //     .end((err, res) => {
  //       if (err) dispatch({ type: types.FETCH_TOPICS_ERROR, err });
  //       else dispatch({ type: types.FETCH_COMMENTS_SUCCESS, data: res.body });
  //     });
  // };

};

actions.fetchArticleSuccess = function (data) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: data
  };
};
actions.fetchArticleRequest = function () {
  return {
    type: types.FETCH_ARTICLES_SUCCESS
  };
};
actions.fetchArticleError = function (error) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    error: error
  };
};
actions.fetchTopicsSuccess = function (data) {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    data: data
  };
};
actions.fetchTopicsRequest = function () {
  return {
    type: types.FETCH_TOPICS_REQUEST
  };
};
actions.fetchTopicsError = function (error) {
  return {
    type: types.FETCH_TOPICS_ERROR,
    error: error
  };
};

actions.fetchCommentsSuccess = function (data) {
  return {
    type: types.FETCH_ARTICLE_SUCCESS,
    data: data
  };
};
actions.fetchCommentsRequest = function () {
  return {
    type: types.FETCH_ARTICLE_REQUEST
  };
};
actions.fetchCommentsError = function (error) {
  return {
    type: types.FETCH_ARTICLE_ERROR,
    error: error
  };
};
actions.setFilter = function (filter) {
  return {
    type: types.SET_FILTER,
    filter: filter
  };
};



export default actions;
