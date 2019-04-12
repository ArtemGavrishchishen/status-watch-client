import axios from 'axios';
import actions from './watchesActions';

axios.defaults.baseURL = 'http://localhost:8080';

const fetchWatchesItems = () => async dispatch => {
  dispatch(actions.fetchWatchesRequest());

  try {
    const response = await axios.get();
    const { data } = response;
    if (data.status === 'success')
      dispatch(actions.fetchWatchesSuccess(data.watches));
  } catch (error) {
    dispatch(actions.fetchWatchesError(error));
  }
};

export default { fetchWatchesItems };
