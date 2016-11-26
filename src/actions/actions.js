import * as types from './types';
import request from 'superagent';
import { ROOT } from '../../config';

const actions = {};
actions.editVote = function (type, id) {
  // e.g: http://northcoders-news-api.herokuapp.com/api/articles/:article_id?vote=up
  console.log(`${ROOT}/articles/${id}?vote=down`)
  return (dispatch) => {
    dispatch({ type: types.PUTVOTE_ARTICLE_REQUEST });
    request
      .put(`${ROOT}/articles/${id}?vote=down`)
      .end((err, res) => {
        if (err) dispatch({ type: types.PUTVOTE_ARTICLE_ERROR, err });
        else dispatch({ type: types.PUTVOTE_ARTICLE_SUCCESS, data: res.body });
      });
  };
};

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

actions.fetchUsers = function () {
  return (dispatch) => {
    dispatch({ type: types.FETCH_USERS_REQUEST });
    request
      .get(`${ROOT}/users`)
      .end((err, res) => {
        if (err) dispatch({ type: types.FETCH_USERS_ERROR, err });
        else dispatch({ type: types.FETCH_USERS_SUCCESS, data: res.body });
      });
  };
};

actions.fetchComments = function (id) {
  //refactor
  let articleId = id;
  return (dispatch) => {
    dispatch({ type: types.FETCH_COMMENTS_REQUEST });
    request
      .get(`${ROOT}/articles/${articleId}/comments`)
      .end((err, res) => {
        if (err) dispatch({ type: types.FETCH_COMMENTS_ERROR, err });
        else dispatch({ type: types.FETCH_COMMENTS_SUCCESS, data: res.body });
      });
  };
};

actions.fetchUserProfile = function (username) {
  return (dispatch) => {
    dispatch({ type: types.FETCH_USERPROFILE_REQUEST });
    request
      .get(`${ROOT}/users/${username}`)
      .end((err, res) => {
        if (err) dispatch({ type: types.FETCH_USERPROFILE_ERROR, err });
        else dispatch({ type: types.FETCH_USERPROFILE_SUCCESS, data: res.body });
      });
  };
};

actions.fetchUserRepos = function (username) {
  return (dispatch) => {
    dispatch({ type: types.FETCH_USERREPOS_REQUEST });
    request
      .get(`${ROOT}/users/${username}/repos`)
      .end((err, res) => {
        if (err) dispatch({ type: types.FETCH_USERREPOS_ERROR, err });
        else dispatch({ type: types.FETCH_USERREPOS_SUCCESS, data: res.body });
      });
  };
};

actions.addComment = function (body, id) {
  let articleId = id;
  return (dispatch) => {
    dispatch({ type: types.ADD_COMMENT_REQUEST });
    request
      .post(`${ROOT}/articles/${articleId}/comments`)
      .send({ "comment": body })
      .end((err, res) => {
        if (err) dispatch({ type: types.ADD_COMMENT_ERROR, err });
        else dispatch({ type: types.ADD_COMMENT_SUCCESS, data: res.body });
      });
  };
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

actions.fetchUsersSuccess = function (data) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    data: data
  };
};
actions.fetchUsersRequest = function () {
  return {
    type: types.FETCH_USERS_REQUEST
  };
};
actions.fetchUsersError = function (error) {
  return {
    type: types.FETCH_USERS_ERROR,
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
// FETCH_USERPROFILE_REQUEST
actions.fetchUserProfileSuccess = function (data) {
  return {
    type: types.FETCH_USERPROFILE_SUCCESS,
    data: data
  };
};
actions.fetchUserProfileRequest = function () {
  return {
    type: types.FETCH_USERPROFILE_REQUEST
  };
};
actions.fetchUserProfileError = function (error) {
  return {
    type: types.FETCH_USERPROFILE_ERROR,
    error: error
  };
};

actions.editVoteSuccess = function (data) {
  return {
    type: types.PUTVOTE_ARTICLE_SUCCESS,
    data: data
  };
};
actions.editVoteRequest = function () {
  return {
    type: types.PUTVOTE_ARTICLE_REQUEST
  };
};
actions.editVoteError = function (error) {
  return {
    type: types.PUTVOTE_ARTICLE_ERROR,
    error: error
  };
};

// // FETCH_USERREPOS_REQUEST
// actions.fetchUserReposSuccess = function (data) {
//   return {
//     type: types.FETCH_USERREPOS_SUCCESS,
//     data: data
//   };
// };
// actions.fetchUserReposRequest = function () {
//   return {
//     type: types.FETCH_USERREPOS_REQUEST
//   };
// };
// actions.fetchUserReposError = function (error) {
//   return {
//     type: types.FETCH_USERREPOS_ERROR,
//     error: error
//   };
// };

actions.setFilter = function (filter) {
  return {
    type: types.SET_FILTER,
    filter: filter
  };
};

export default actions;
