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

function minPriceReducer(state = 0, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.minPrice;

    default:
      return state;
  }
}

function maxPriceReducer(state = 10000000, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.maxPrice;

    default:
      return state;
  }
}

function countAllReducer(state = 0, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.countAll;

    default:
      return state;
  }
}

function filteredCountReducer(state = 0, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.filteredCount;

    default:
      return state;
  }
}

const paramsReducer = combineReducers({
  gender: genderReducer,
  brand: brandReducer,
  color: colorReducer,
  pageCount: pageCountReducer,
  minPrice: minPriceReducer,
  maxPrice: maxPriceReducer,
  countAll: countAllReducer,
  filteredCount: filteredCountReducer,
});

const watchesReducer = combineReducers({
  all: allWatchesReducer,
  hit: hitWatchesReducer,
  params: paramsReducer,
});

export default watchesReducer;
