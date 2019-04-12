import types from './watchesActionTypes';

const fetchWatchesRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchWatchesSuccess = watches => ({
  type: types.FETCH_SUCCESS,
  payload: watches,
});

const fetchWatchesError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default { fetchWatchesRequest, fetchWatchesSuccess, fetchWatchesError };
