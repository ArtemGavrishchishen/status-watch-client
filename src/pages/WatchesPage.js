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
    const { watches, params, fetchWatches } = this.props;
    return (
      <main>
        <section className={styles.watches}>
          <div className={styles.container}>
            <div className={styles.watchesPage}>
              <div className={styles.leftBar}>
                <LeftBar params={params} />
              </div>

              <div className={styles.content}>
                <div className={styles.topBar}>
                  <TopBar fetch={fetchWatches} />
                </div>
                <WatchesGrid items={watches} />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  watches: watchesSelectors.getWatchesItems(state),
  params: {
    gender: watchesSelectors.getWatchesParamsGender(state),
    brand: watchesSelectors.getWatchesParamsBrand(state),
    color: watchesSelectors.getWatchesParamsColor(state),
  },
});

const mapDispatchToProps = {
  fetchWatches: watchesOperations.fetchWatchesItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchesPage);
