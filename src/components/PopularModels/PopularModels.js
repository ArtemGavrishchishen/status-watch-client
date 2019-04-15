import React from 'react';

import WatchesGrid from '../WatchesGrid/WatchesGrid';

import styles from './PopularModels.module.css';

const PopularModels = ({ items = [] }) => (
  <div className={styles.popularModels}>
    <div className={styles.container}>
      <h3 className={styles.title}>Popular Models</h3>
    </div>
    <WatchesGrid items={items} />
  </div>
);

export default PopularModels;
