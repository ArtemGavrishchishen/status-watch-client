import React from 'react';

import styles from './CheckBoxColor.module.css';

const CheckBoxColor = ({ items = [], selectedItems = [], handleChange }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.item} style={{ backgroundColor: item }} key={item}>
        <label className={styles.label}>
          <input
            className={styles.hidden}
            type="checkbox"
            name="color"
            onChange={handleChange}
            value={item}
            checked={selectedItems.includes(item)}
          />
          <span>
            {selectedItems.includes(item) && (
              <ul className={styles.arrow}>
                <li className={styles.left} />
                <li className={styles.right} />
              </ul>
            )}
          </span>
        </label>
      </li>
    ))}
  </ul>
);

export default CheckBoxColor;
