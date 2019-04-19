import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import CheckBoxGender from '../CheckBoxGender/CheckBoxGender';
import CheckBoxBrand from '../CheckBoxBrand/CheckBoxBrand';
import CheckBoxColor from '../CheckBoxColor/CheckBoxColor';

import styles from './LeftBar.module.css';

// const removeCheckFromItems = (items, value) => {
//   const newItems = items.filter(item => item !== value);
//   return newItems;
// };

class LeftBar extends Component {
  state = {
    count: '',
    products: '',
  };

  handleCheckBoxChange = ({ target }) => {
    console.log(target.name);
    console.log(target.value);
    const { history, location } = this.props;
    const parsed = queryString.parse(location.search);

    if (!parsed[target.name]) {
      parsed[target.name] = [];
      parsed[target.name] = [...parsed[target.name], target.value];
    }
    console.log(parsed);
    const stringified = queryString.stringify(parsed);

    history.push({
      pathname: location.pathname,
      search: stringified,
    });
  };

  render() {
    const { count, products } = this.state;
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
              </li>
              <li className={styles.item}>
                <div className={styles.itemTitle}>Gender</div>
                <CheckBoxGender />
              </li>
              <li className={styles.item}>
                <div className={styles.itemTitle}>Brand</div>
                <CheckBoxBrand
                  items={['test_1', 'test_2', 'test_3']}
                  selectedItems={['test_2']}
                  handleChange={this.handleCheckBoxChange}
                />
              </li>
              <li className={styles.item}>
                <div className={styles.itemTitle}>Color</div>
                <CheckBoxColor />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(LeftBar);
