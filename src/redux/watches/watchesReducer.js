import types from './watchesActionTypes';

export default function watchesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
}
