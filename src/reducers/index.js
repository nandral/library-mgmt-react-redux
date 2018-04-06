// action types
import * as Actions from '../sagas/actionTypes'

// reducer with initial state
const initialState = {
  fetching: false,
  books: [],
  mostReadBooks: [],
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_BOOKS_REQUEST:
      return { ...state, fetching: true, error: null };
    case Actions.GET_BOOKS_SUCCESS:
      return { ...state, fetching: false, books: action.books };
    case Actions.MOST_READ_BOOKS_REQUEST:
      return { ...state, fetching: true, error: null };
    case Actions.MOST_READ_BOOKS_SUCCESS:
      return { ...state, fetching: false, mostReadBooks: action.mostReadBooks };
    case Actions.API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}
