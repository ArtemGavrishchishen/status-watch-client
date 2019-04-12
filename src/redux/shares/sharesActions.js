import types from './sharesActionTypes';

const fetchSharesRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSharesSuccess = shares => ({
  type: types.FETCH_SUCCESS,
  payload: shares,
});

const fetchSharesError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default { fetchSharesRequest, fetchSharesSuccess, fetchSharesError };
