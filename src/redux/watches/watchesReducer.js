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

function paramsReducer(
  state = { gender: '', brand: '', color: '' },
  { type, payload },
) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

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

const watchesReducer = combineReducers({
  watches: allWatchesReducer,
  params: paramsReducer,
  hit: hitWatchesReducer,
});

export default watchesReducer;
