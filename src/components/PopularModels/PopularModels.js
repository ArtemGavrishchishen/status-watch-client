import React from 'react';

import WatchItem from '../WatchItem/WatchItem';

import styles from './PopularModels.module.css';

const PopularModels = ({ items = [1, 2, 3, 4] }) => (
  <div className={styles.container}>
    <h3>Popular Models</h3>
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item}>
          <WatchItem />
        </li>
      ))}
    </ul>
  </div>
);

export default PopularModels;
