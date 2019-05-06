import React from 'react';

import styles from './CheckBoxGender.module.css';

const CheckBoxGender = ({ items = [], selectedItems = [], handleChange }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li
        className={selectedItems.includes(item) ? styles.selected : styles.item}
        key={item}
      >
        <label className={styles.label}>
          <input
            className={styles.hidden}
            type="checkbox"
            name="gender"
            onChange={handleChange}
            value={item}
            checked={selectedItems.includes(item)}
          />
          {item}
        </label>
      </li>
    ))}
  </ul>
);

export default CheckBoxGender;
