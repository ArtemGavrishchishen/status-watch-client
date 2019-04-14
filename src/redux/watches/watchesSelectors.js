const getWatchesItems = state => state.watches;

const getFourHitWathes = state =>
  getWatchesItems(state)
    .filter(watch => watch.label === 'hit')
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

export default { getWatchesItems, getFourHitWathes };
