import React from 'react';

import styles from './CheckBoxGender.module.css';

const CheckBoxGender = ({ items = ['1', '2', '3'] }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.item} key={item}>
        <label>
          <input type="checkbox" name={item} value={item} />
          {item}
        </label>
      </li>
    ))}
  </ul>
);

export default CheckBoxGender;
