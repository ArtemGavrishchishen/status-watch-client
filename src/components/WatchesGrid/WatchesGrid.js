import React from 'react';

import WatchItem from '../WatchItem/WatchItem';

import styles from './WatchesGrid.module.css';

const WatchesGrid = ({ items = [] }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {items.map(item => (
        <li className={styles.item} key={item.id}>
          <WatchItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);

export default WatchesGrid;
