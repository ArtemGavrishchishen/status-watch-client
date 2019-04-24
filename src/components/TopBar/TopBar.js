import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Selected from '../Selected/Selected';
import Pagination from '../Pagination/Pagination';

import styles from './TopBar.module.css';

const optionsSort = [
  { value: 'hit', label: 'sorted by hit' },
  { value: 'new', label: 'sorted by new' },
  { value: 'cheap', label: 'from cheap to expensive' },
  { value: 'expensive', label: 'from expensive to cheap' },
];

const optionsView = [
  { value: '12', label: 'View by 12' },
  { value: '15', label: 'View by 15' },
];

const getSelectedOption = (select, options) =>
  options.find(option => option.value === select);

class TopBar extends Component {
  state = {};

  onSortChange = selected => {
    const { history, location } = this.props;
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });
    let stringified;

    if (selected !== null) {
      parsed.sort = selected.value;
      stringified = queryString.stringify(parsed, { arrayFormat: 'comma' });
    }

    if (selected === null) {
      const { sort, ...newParsed } = parsed;
      stringified = queryString.stringify(newParsed, { arrayFormat: 'comma' });
    }

    history.push({
      pathname: location.pathname,
      search: stringified,
    });
  };

  onViewChange = selected => {
    const { history, location, fetch } = this.props;
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });
    let stringified;

    if (parsed.page) {
      parsed.page = 1;
    }

    if (selected !== null) {
      parsed.view = selected.value;
      stringified = queryString.stringify(parsed, { arrayFormat: 'comma' });
      fetch(parsed);
    }

    if (selected === null) {
      const { view, ...newParsed } = parsed;
      stringified = queryString.stringify(newParsed, { arrayFormat: 'comma' });
      fetch(newParsed);
    }

    history.push({
      pathname: location.pathname,
      search: stringified,
    });
  };

  render() {
    const { location } = this.props;
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });
    return (
      <div className={styles.bar}>
        <Selected
          selectedOption={getSelectedOption(parsed.sort, optionsSort)}
          handleChange={this.onSortChange}
          options={optionsSort}
          placeholder="Sorted by ..."
        />
        <Selected
          selectedOption={getSelectedOption(parsed.view, optionsView)}
          handleChange={this.onViewChange}
          options={optionsView}
          placeholder="View by ..."
        />
        <Pagination />
      </div>
    );
  }
}

export default withRouter(TopBar);
