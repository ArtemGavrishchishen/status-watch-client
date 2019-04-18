import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopBar from '../components/TopBar/TopBar';
import WatchesGrid from '../components/WatchesGrid/WatchesGrid';

import { watchesSelectors, watchesOperations } from '../redux/watches';

import styles from './WatchesPage.module.css';

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
        <div className={styles.container}>
          <div className={styles.watchesPage}>
            <div className={styles.leftBar}>1</div>
            <div className={styles.content}>
              <div className={styles.topBar}>
                <TopBar />
              </div>
              <WatchesGrid items={watches} />
            </div>
          </div>
        </div>
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
