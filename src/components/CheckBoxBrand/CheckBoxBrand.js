import React from 'react';

import styles from './CheckBoxBrand.module.css';

const CheckBoxBrand = ({ items = [], selectedItems = [], handleChange }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.item} key={item}>
        <label>
          <input
            type="checkbox"
            name="brand"
            value={item}
            onChange={handleChange}
            checked={selectedItems.includes(item)}
          />
          {item}
        </label>
      </li>
    ))}
  </ul>
);

export default CheckBoxBrand;
