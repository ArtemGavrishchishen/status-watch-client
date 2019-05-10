import types from './cartActionTypes';

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: id,
});

const decrementAmountFromCart = id => ({
  type: types.DECREMENT_FROM_CART,
  payload: id,
});

const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: id,
});

export default {
  addToCart,
  decrementAmountFromCart,
  removeFromCart,
};
