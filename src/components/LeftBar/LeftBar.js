import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import InputRange from 'react-input-range';

import CheckBoxGender from '../CheckBoxGender/CheckBoxGender';
import CheckBoxBrand from '../CheckBoxBrand/CheckBoxBrand';
import CheckBoxColor from '../CheckBoxColor/CheckBoxColor';

import styles from './LeftBar.module.css';
import 'react-input-range/lib/css/index.css';

const toggleCheckFromItems = (items, value) => {
  if (Array.isArray(items)) {
    return items.includes(value)
      ? items.filter(item => item !== value)
      : [...items, value];
  }
  if (!Array.isArray(items)) {
    return items === value ? [] : [items, value];
  }
  return items;
};

const getSelectedItems = (location, value) => {
  const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });
  return Array.isArray(parsed[value]) ? parsed[value] : [parsed[value]];
};

class LeftBar extends Component {
  state = {
    priceRange: false,
  };

  handleCheckBoxChange = ({ target }) => {
    const { history, location, fetch } = this.props;
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });

    if (parsed[target.name]) {
      parsed[target.name] = toggleCheckFromItems(
        parsed[target.name],
        target.value,
      );
    }

    if (!parsed[target.name]) {
      parsed[target.name] = target.value;
    }

    let stringified;

    if (!parsed.page) {
      stringified = queryString.stringify(parsed, { arrayFormat: 'comma' });
    }

    if (parsed.page) {
      const { page, ...newParsed } = parsed;
      stringified = queryString.stringify(newParsed, { arrayFormat: 'comma' });
    }

    fetch(parsed);

    history.push({
      pathname: location.pathname,
      search: stringified,
    });
  };

  handlePriceRangeChange = range => {
    const { history, location, params } = this.props;
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });

    parsed.minPrice = range.min < params.minPrice ? params.minPrice : range.min;
    parsed.maxPrice = range.max > params.maxPrice ? params.maxPrice : range.max;

    const stringified = queryString.stringify(parsed, { arrayFormat: 'comma' });
    this.setState({ priceRange: true });
    history.push({
      pathname: location.pathname,
      search: stringified,
    });
  };

  getPriceRange = () => {
    const { location, params } = this.props;
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });

    const value = {
      min: Number(params.minPrice),
      max: Number(params.maxPrice),
    };

    if (parsed.minPrice) {
      value.min = Number(parsed.minPrice);
    }

    if (parsed.maxPrice) {
      value.max = Number(parsed.maxPrice);
    }

    return value;
  };

  handleResetForm = () => {
    const { history, location, fetch } = this.props;

    fetch();

    history.push({
      pathname: location.pathname,
    });
  };

  handleFetchPriceRange = () => {
    const { location, fetch } = this.props;

    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });

    fetch(parsed);

    this.setState({ priceRange: false });
  };

  render() {
    const { priceRange } = this.state;
    const { location, params } = this.props;
    return (
      <div className={styles.bar}>
        <div className={styles.title}>Filter</div>
        <div className={styles.content}>
          <form className={styles.form}>
            <div className={styles.header}>
              {params.filteredCount !== params.countAll && (
                <div>
                  <div className={styles.counter}>
                    {params.filteredCount} products from {params.countAll}
                  </div>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={this.handleResetForm}
                  >
                    x
                  </button>
                </div>
              )}
            </div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.itemTitle}>Price, USD</div>
                <InputRange
                  maxValue={params.maxPrice}
                  minValue={params.minPrice}
                  value={this.getPriceRange()}
                  onChange={value => this.handlePriceRangeChange(value)}
                />
                {priceRange && (
                  <button
                    type="button"
                    className={styles.btnPrice}
                    onClick={this.handleFetchPriceRange}
                  >
                    View
                  </button>
                )}
              </li>
              <li className={styles.item}>
                <div className={styles.itemTitle}>Gender</div>
                <CheckBoxGender
                  items={params.gender}
                  selectedItems={getSelectedItems(location, 'gender')}
                  handleChange={this.handleCheckBoxChange}
                />
              </li>
              <li className={styles.item}>
                <div className={styles.itemTitle}>Brand</div>
                <CheckBoxBrand
                  items={params.brand}
                  selectedItems={getSelectedItems(location, 'brand')}
                  handleChange={this.handleCheckBoxChange}
                />
              </li>
              <li className={styles.item}>
                <div className={styles.itemTitle}>Color</div>
                <CheckBoxColor
                  items={params.color}
                  selectedItems={getSelectedItems(location, 'color')}
                  handleChange={this.handleCheckBoxChange}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(LeftBar);
