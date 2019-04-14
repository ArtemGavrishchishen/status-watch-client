import React from 'react';

import WatchItem from '../WatchItem/WatchItem';

import styles from './PopularModels.module.css';

const PopularModels = ({ items = [] }) => (
  <div className={styles.popularModels}>
    <div className={styles.container}>
      <h3 className={styles.title}>Popular Models</h3>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id}>
            <WatchItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default PopularModels;
