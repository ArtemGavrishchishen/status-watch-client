import React from 'react';

import styles from './CheckBoxColor.module.css';

const CheckBoxColor = ({ items = [], selectedItems = [], handleChange }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.item} key={item}>
        <label>
          <input
            type="checkbox"
            name="color"
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

export default CheckBoxColor;
