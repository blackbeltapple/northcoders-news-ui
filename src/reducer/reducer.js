import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedTopic: null,
  loading: false,
  error: null,
  topics: [],
  filter: ''
};

function reducer (prevState = initialState, action) {
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
      newState.filter = action.filter;
      return newState;

    default:
      return prevState;
  }
  return newState;
}

export default reducer;
