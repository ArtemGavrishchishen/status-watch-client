import axios from 'axios';
import actions from './sharesActions';

axios.defaults.baseURL = 'http://localhost:8080';

const fetchSharesItems = () => async dispatch => {
  dispatch(actions.fetchSharesRequest());

  try {
    const response = await axios.get('/shares');
    const { data } = response;

    if (data.status === 'success')
      dispatch(actions.fetchSharesSuccess(data.shares));
  } catch (error) {
    dispatch(actions.fetchSharesError(error));
  }
};

export default { fetchSharesItems };
