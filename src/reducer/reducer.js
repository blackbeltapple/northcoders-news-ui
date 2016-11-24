import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedTopic: null,
  loading: false,
  error: null,
  topics: []
};

function reducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case types.FETCH_ARTICLES_SUCCESS:
      console.log('FETCH_ARTICLES_SUCCESS')
      newState.loading = false;
      newState.articles = action.data.articles;
      return newState;

    case types.FETCH_ARTICLES_REQUEST:
      console.log('FETCH_ARTICLES_REQUEST')
      newState.loading = true;
      return newState;

    case types.FETCH_ARTICLES_ERROR:
      console.log('FETCH_ARTICLES_ERROR')
      newState.loading = false;
      newState.error = action.error;
      return;

    case types.FETCH_TOPICS_SUCCESS:
      console.log('FETCH_TOPICS_SUCCESS')
      newState.loading = false;
      newState.topics = action.data.topics;
      return newState;

    case types.FETCH_TOPICS_REQUEST:
      console.log('FETCH_TOPICS_REQUEST')
      newState.loading = true;
      return newState;

    case types.FETCH_TOPICS_ERROR:
      console.log('FETCH_TOPICS_ERROR')
      newState.loading = false;
      newState.error = action.error;
      return;

    default:
      console.log('Switch statement didnt catch this case!!!!');
      return prevState;
  }

  return newState;
}

export default reducer;
