import { combineReducers } from 'redux';
import types from './cartActionTypes';

function idsReducers(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload) ? state : [...state, payload];

    case types.REMOVE_FROM_CART:
      return state.filter(id => id !== payload);

    default:
      return state;
  }
}

function amountReducers(state = {}, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [payload]: state[payload] ? state[payload] + 1 : 1,
      };

    default:
      return state;
  }
}

const cartReducer = combineReducers({
  ids: idsReducers,
  amount: amountReducers,
});

export default cartReducer;
