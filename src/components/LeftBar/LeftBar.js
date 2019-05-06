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
    return items.includes(value) ? [] : [items, value];
  }
  return items;
};

const getSelectedItems = (location, value) => {
  const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });
  return Array.isArray(parsed[value]) ? parsed[value] : [parsed[value]];
};

class LeftBar extends Component {
  state = {
    count: '',
    products: '',
  };

  handleCheckBoxChange = ({ target }) => {
    const { history, location } = this.props;
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

    const stringified = queryString.stringify(parsed, { arrayFormat: 'comma' });

    history.push({
      pathname: location.pathname,
      search: stringified,
    });
  };

  handlePriceRangeChange = range => {
    const { history, location } = this.props;
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' });

    parsed.minPrice = range.min;
    parsed.maxPrice = range.max;

    const stringified = queryString.stringify(parsed, { arrayFormat: 'comma' });

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

  render() {
    const { count, products } = this.state;
    const { location, params } = this.props;
    return (
      <div className={styles.bar}>
        <div className={styles.title}>Filter</div>
        <div className={styles.content}>
          <form className={styles.form}>
            <div className={styles.header}>
              <div
                className={styles.counter}
              >{`${count} products from ${products}`}</div>
              <button type="button" className={styles.btn}>
                x
              </button>
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
