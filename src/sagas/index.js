import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import * as Actions from './actionTypes'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(Actions.GET_BOOKS_REQUEST, booksSaga);
  yield takeLatest(Actions.MOST_READ_BOOKS_REQUEST, mostReadBooksSaga);
}

// function that makes the api request and returns a Promise for response
function fetchBooks() {
  return axios({
    method: "get",
    url: "http://localhost:9000/books"
  });
}
function fetchMostReadBooks() {
  return axios({
    method: "get",
    url: "http://localhost:9000/mostReadBooks"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* booksSaga() {
  try {
    const response = yield call(fetchBooks);
    const books = response.data;

    yield put({ type: Actions.GET_BOOKS_SUCCESS, books });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

function* mostReadBooksSaga() {
  try {
    const response = yield call(fetchMostReadBooks);
    const mostReadBooks = response.data;

    yield put({ type: Actions.MOST_READ_BOOKS_SUCCESS, mostReadBooks });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
