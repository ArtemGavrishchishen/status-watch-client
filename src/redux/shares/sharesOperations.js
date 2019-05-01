import axios from 'axios';
import actions from './sharesActions';

import siteURL from '../../configs/siteURL';

axios.defaults.baseURL = siteURL;

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
