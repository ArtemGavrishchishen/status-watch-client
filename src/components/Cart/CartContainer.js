import { connect } from 'react-redux';
import { cartActions } from '../../redux/cart';

import Cart from './Cart';

const mapDispatchToProps = {
  add: cartActions.addToCart,
  decrement: cartActions.decrementAmountFromCart,
  removeWatchFromCart: cartActions.removeFromCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(Cart);
