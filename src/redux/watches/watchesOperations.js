import axios from 'axios';
import actions from './watchesActions';

axios.defaults.baseURL = 'http://localhost:8080';

const fetchWatchesItems = qs => async dispatch => {
  dispatch(actions.fetchWatchesRequest());

  try {
    const response = await axios.get('/watches', { params: qs });
    const { data } = response;
    console.log(data);
    if (data.status === 'success') dispatch(actions.fetchWatchesSuccess(data));
  } catch (error) {
    dispatch(actions.fetchWatchesError(error));
  }
};

const fetchHitWatchesItems = () => async dispatch => {
  dispatch(actions.fetchHitWatchesRequest());

  try {
    const response = await axios.get('/hit');
    const { data } = response;
    if (data.status === 'success')
      dispatch(actions.fetchHitWatchesSuccess(data.watches));
  } catch (error) {
    dispatch(actions.fetchHitWatchesError(error));
  }
};

export default { fetchWatchesItems, fetchHitWatchesItems };
