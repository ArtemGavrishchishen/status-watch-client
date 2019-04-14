import React, { Component } from 'react';
import { connect } from 'react-redux';

import SimpleSlider from '../components/SimpleSlider/SimpleSlider';
import PopularModels from '../components/PopularModels/PopularModels';
import Banner from '../components/Banner/Banner';
import Partners from '../components/Partners/Partners';

import { sharesSelectors, sharesOperations } from '../redux/shares';
import { watchesSelectors, watchesOperations } from '../redux/watches';

import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {};

  componentDidMount() {
    const { fetchShares, fetchWatches } = this.props;
    fetchShares();
    fetchWatches();
  }

  render() {
    const { shares, hitWatches } = this.props;
    return (
      <main>
        <section className={styles.slider}>
          <SimpleSlider items={shares} />
        </section>
        <section className={styles.popular}>
          <PopularModels items={hitWatches} />
        </section>
        <section className={styles.banner}>
          <Banner />
        </section>
        <section className={styles.partners}>
          <Partners />
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  shares: sharesSelectors.getSharesItems(state),
  hitWatches: watchesSelectors.getFourHitWathes(state),
});

const mapDispatchToProps = {
  fetchShares: sharesOperations.fetchSharesItems,
  fetchWatches: watchesOperations.fetchWatchesItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
