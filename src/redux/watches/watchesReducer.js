import { combineReducers } from 'redux';

import types from './watchesActionTypes';

function allWatchesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.watches;

    default:
      return state;
  }
}

function hitWatchesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.HIT_FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
}

function genderReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.gender;

    default:
      return state;
  }
}

function brandReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.brand;

    default:
      return state;
  }
}

function colorReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.color;

    default:
      return state;
  }
}

function pageCountReducer(state = 1, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.maxPage;

    default:
      return state;
  }
}

const paramsReducer = combineReducers({
  gender: genderReducer,
  brand: brandReducer,
  color: colorReducer,
  pageCount: pageCountReducer,
});

const watchesReducer = combineReducers({
  all: allWatchesReducer,
  hit: hitWatchesReducer,
  params: paramsReducer,
});

export default watchesReducer;
