import { connect } from 'react-redux';
import { cartActions } from '../../redux/cart';

import WatchItem from './WatchItem';

const mapDispatchToProps = {
  add: cartActions.addToCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(WatchItem);
