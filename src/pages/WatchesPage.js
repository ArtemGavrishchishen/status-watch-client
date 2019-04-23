import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import LeftBar from '../components/LeftBar/LeftBar';
import TopBar from '../components/TopBar/TopBar';
import WatchesGrid from '../components/WatchesGrid/WatchesGrid';

import { watchesSelectors, watchesOperations } from '../redux/watches';

import styles from './WatchesPage.module.css';

class WatchesPage extends Component {
  state = {};

  componentDidMount() {
    const { fetchWatches, location } = this.props;
    const parsed = queryString.parse(location.search);

    fetchWatches(parsed);
  }

  render() {
    const { watches, fetchWatches } = this.props;
    return (
      <main>
        <div className={styles.container}>
          <div className={styles.watchesPage}>
            <div className={styles.leftBar}>
              <LeftBar />
            </div>

            <div className={styles.content}>
              <div className={styles.topBar}>
                <TopBar fetch={fetchWatches} />
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
