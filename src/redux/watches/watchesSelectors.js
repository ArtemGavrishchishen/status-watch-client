const getWatchesItems = state => state.data.watches;

const getFourHitWathes = state =>
  getWatchesItems(state)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

export default { getWatchesItems, getFourHitWathes };
