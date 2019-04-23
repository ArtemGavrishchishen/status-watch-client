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

const fetchHitWatchesRequest = () => ({
  type: types.HIT_FETCH_REQUEST,
});

const fetchHitWatchesSuccess = watches => ({
  type: types.HIT_FETCH_SUCCESS,
  payload: watches,
});

const fetchHitWatchesError = error => ({
  type: types.HIT_FETCH_ERROR,
  payload: error,
});

export default {
  fetchWatchesRequest,
  fetchWatchesSuccess,
  fetchWatchesError,
  fetchHitWatchesRequest,
  fetchHitWatchesSuccess,
  fetchHitWatchesError,
};
