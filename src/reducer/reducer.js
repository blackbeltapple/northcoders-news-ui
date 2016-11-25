import * as types from '../actions/types';

const initialState = {
  articles: [],
  comments: [],
  loading: false,
  error: null,
  topics: [],
  filter: ''
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
      return;

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
      return;

    case types.SET_FILTER:
      let toLower = action.filter.toLowerCase();
      newState.filter = toLower;
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
      return;

    case types.ADD_COMMENT:
      let newObj = {};
      newObj.body = action.body;
      newObj.created_by = action.created_by;
      newObj.votes = 0;
      newObj.belongs_to = action.belongs_to;
      // IS THIS THE RIGHT THING TO DO ?
      let newComments = newState.comments.slice();
      newComments.push(newObj);
      newState.comments = newComments;
      return newState;

    default:
      return prevState;
  }
  return newState;
}

export default reducer;
