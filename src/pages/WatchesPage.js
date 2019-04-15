import React, { Component } from 'react';
import { connect } from 'react-redux';

import WatchesGrid from '../components/WatchesGrid/WatchesGrid';

import { watchesSelectors, watchesOperations } from '../redux/watches';

class WatchesPage extends Component {
  state = {};

  componentDidMount() {
    const { fetchWatches } = this.props;
    fetchWatches();
  }

  render() {
    const { watches } = this.props;
    return (
      <main>
        <h1>WatchesPage</h1>
        <WatchesGrid items={watches} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  watches: watchesSelectors.getWatchesItems(state),
});

const mapDispatchToProps = {
  fetchWatches: watchesOperations.fetchWatchesItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchesPage);
