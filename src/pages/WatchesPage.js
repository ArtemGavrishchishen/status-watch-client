import React, { Component } from 'react';
import { connect } from 'react-redux';

import Selected from '../components/Selected/Selected';
import Pagination from '../components/Pagination/Pagination';
import WatchesGrid from '../components/WatchesGrid/WatchesGrid';

import { watchesSelectors, watchesOperations } from '../redux/watches';

import styles from './WatchesPage.module.css';

const optionsSort = [
  { value: 'Sorted by 1', label: 'Sorted by 1' },
  { value: 'Sorted by 2', label: 'Sorted by 2' },
  { value: 'Sorted by 3', label: 'Sorted by 3' },
];

const optionsView = [
  { value: 'View by 1', label: 'View by 1' },
  { value: 'View by 2', label: 'View by 2' },
  { value: 'View by 3', label: 'View by 3' },
];

class WatchesPage extends Component {
  state = {
    selectedSort: null,
    selectedView: null,
  };

  componentDidMount() {
    const { fetchWatches } = this.props;
    fetchWatches();
  }

  handleChangeSort = selected => this.setState({ selectedSort: selected });

  handleChangeView = selected => this.setState({ selectedView: selected });

  render() {
    const { selectedSort, selectedView } = this.state;
    const { watches } = this.props;
    return (
      <main>
        <div className={styles.container}>
          <div className={styles.watchesPage}>
            <div className={styles.leftBar}>1</div>
            <div className={styles.content}>
              <div className={styles.topBar}>
                <Selected
                  selectedOption={selectedSort}
                  handleChange={this.handleChangeSort}
                  options={optionsSort}
                  placeholder="Sorted by ..."
                />
                <Selected
                  selectedOption={selectedView}
                  handleChange={this.handleChangeView}
                  options={optionsView}
                  placeholder="View by ..."
                />
                <Pagination />
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
