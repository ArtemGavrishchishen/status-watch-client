import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { ReactComponent as Left } from './assets/left-arrow.svg';
import { ReactComponent as Right } from './assets/right-arrow.svg';

import { watchesSelectors, watchesOperations } from '../../redux/watches';

import styles from './Pagination.module.css';

class Pagination extends Component {
  state = {};

  handlePageClick = data => {
    console.log('handlePageClick');
    const { history, location, fetchWatches } = this.props;
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });
    parsed.page = data.selected + 1;
    let stringified;

    if (Number(parsed.page) !== 1) {
      stringified = queryString.stringify(parsed, { arrayFormat: 'comma' });
      fetchWatches(parsed);
    }

    if (Number(parsed.page) === 1) {
      const { page, ...newParsed } = parsed;
      stringified = queryString.stringify(newParsed, { arrayFormat: 'comma' });
      fetchWatches(newParsed);
    }

    history.push({
      pathname: location.pathname,
      search: stringified,
    });
  };

  render() {
    const { maxPage, location } = this.props;
    const qs = queryString.parse(location.search, {
      arrayFormat: 'comma',
    });
    const page = qs.page - 1;

    return (
      <ReactPaginate
        initialPage={Number(page)}
        disableInitialCallback
        previousLabel={<Left />}
        nextLabel={<Right />}
        pageCount={maxPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={this.handlePageClick}
        containerClassName={styles.pagination}
        previousClassName={styles.prev}
        nextClassName={styles.next}
        pageClassName={styles.item}
        activeClassName={styles.active}
      />
    );
  }
}

const mapStateToProps = state => ({
  maxPage: watchesSelectors.getWatchesParamsMaxPage(state),
});

const mapDispatchToProps = {
  fetchWatches: watchesOperations.fetchWatchesItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Pagination));
