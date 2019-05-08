import { createSelector } from 'reselect';

const getWatchesItems = state => state.watches.all;

const getCartWatchesIds = state => state.cart.ids;
const getCartWatchesAmounts = state => state.cart.amount;

const getCartWatchesAmount = createSelector(
  getCartWatchesIds,
  ids => ids.length,
);

const getCartWatches = createSelector(
  [getCartWatchesIds, getCartWatchesAmounts, getWatchesItems],
  (ids, amounts, watches) =>
    ids.map(id => ({
      ...watches.find(watch => watch.id === id),
      amount: amounts[id],
    })),
);

export default {
  getCartWatchesIds,
  getCartWatchesAmounts,
  getCartWatchesAmount,
  getCartWatches,
};
