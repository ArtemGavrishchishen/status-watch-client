import types from './sharesActionTypes';

export default function sharesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
}
