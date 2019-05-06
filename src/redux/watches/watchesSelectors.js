const getWatchesItems = state => state.watches.all;
const getHitWatchesItems = state => state.watches.hit;

const getWatchesParamsGender = state => state.watches.params.gender;
const getWatchesParamsBrand = state => state.watches.params.brand;
const getWatchesParamsColor = state => state.watches.params.color;
const getWatchesParamsMaxPage = state => state.watches.params.pageCount;
const getWatchesParamsMinPrice = state => state.watches.params.minPrice;
const getWatchesParamsMaxPrice = state => state.watches.params.maxPrice;

const getFourHitWathes = state =>
  getHitWatchesItems(state)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

export default {
  getWatchesItems,
  getFourHitWathes,
  getWatchesParamsGender,
  getWatchesParamsBrand,
  getWatchesParamsColor,
  getWatchesParamsMaxPage,
  getWatchesParamsMinPrice,
  getWatchesParamsMaxPrice,
};
