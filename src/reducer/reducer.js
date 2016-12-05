import * as types from '../actions/types';

const initialState = {
  articles: [],
  comments: [],
  loading: false,
  error: null,
  topics: [],
  filter: '',
  users: []
};

function reducer (prevState = initialState, action) {
  if (!action) return prevState;
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case types.FETCH_ARTICLES_SUCCESS:
      newState.loading = false;
      newState.articles = action.data.articles;
      return newState;

    case types.FETCH_ARTICLES_REQUEST:
      newState.loading = true;
      return newState;

    case types.FETCH_ARTICLES_ERROR:
      newState.loading = false;
      newState.error = action.error;
      return newState;

    case types.FETCH_TOPICS_SUCCESS:
      newState.loading = false;
      newState.topics = action.data.topics;
      return newState;

    case types.FETCH_TOPICS_REQUEST:
      newState.loading = true;
      return newState;

    case types.FETCH_TOPICS_ERROR:
      newState.loading = false;
      newState.error = action.error;
      return newState;

    case types.SET_FILTER:
      let toLower = action.filter.toLowerCase();
      newState.filter = toLower;
      return newState;

    case types.FETCH_USERS_SUCCESS:
      newState.loading = false;
      newState.users = action.data.users;
      return newState;

    case types.FETCH_USERS_REQUEST:
      newState.loading = true;
      return newState;

    case types.FETCH_USERS_ERROR:
      newState.loading = false;
      newState.error = action.error;
      return newState;

    case types.FETCH_COMMENTS_SUCCESS:
      newState.loading = false;
      newState.comments = action.data.comments;
      return newState;

    case types.FETCH_COMMENTS_REQUEST:
      newState.loading = true;
      return newState;

    case types.FETCH_COMMENTS_ERROR:
      newState.loading = false;
      newState.error = action.error;
      return newState;

    case types.FETCH_USERPROFILE_SUCCESS:
      newState.loading = false;
      newState.users = action.data.users;
      return newState;

    case types.FETCH_USERPROFILE_REQUEST:
      newState.loading = true;
      return newState;

    case types.FETCH_USERPROFILE_ERROR:
      newState.loading = false;
      newState.error = action.error;
      return newState;

    case types.PUTVOTE_ARTICLE_SUCCESS:
      newState.loading = false;
      // newState.users = action.data.users;
      return newState;

    case types.PUTVOTE_ARTICLE_REQUEST:
      newState.loading = true;
      return newState;

    case types.PUTVOTE_ARTICLE_ERROR:
      newState.loading = false;
      newState.error = action.error;
      return newState;

    case types.DELETE_COMMENT_SUCCESS:
      newState.loading = false;
      // newState.users = action.data.users;
      return newState;

    case types.DELETE_COMMENT_REQUEST:
      newState.loading = true;
      return newState;

    case types.DELETE_COMMENT_ERROR:
      newState.loading = false;
      newState.error = action.error;
      return newState;

    case types.ADD_COMMENT_REQUEST:
      newState.loading = true;
      return newState;

    case types.ADD_COMMENT_SUCCESS:
      newState.loading = false;
      let newComments = newState.comments.slice();
      newComments.push(action.data.comment);
      newState.comments = newComments;
      return newState;

    case types.ADD_COMMENT_ERROR:
      newState.loading = false;
      newState.error = action.error;
      return newState;

    default:
      return prevState;
  }
}

export default reducer;
