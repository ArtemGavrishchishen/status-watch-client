import React from 'react';

import { ReactComponent as Like } from './assets/like.svg';
import { ReactComponent as Return } from './assets/return.svg';
import { ReactComponent as Delivery } from './assets/delivery.svg';

import styles from './AdvantagesList.module.css';

const AdvantagesList = () => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <div className={styles.icons}>
        <Like />
      </div>
      <div className={styles.content}>
        1 year warranty.
        <br />
        Service and quality
      </div>
    </li>
    <li className={styles.item}>
      <div className={styles.icons}>
        <Return />
      </div>
      <div className={styles.content}>
        Return of goods
        <br />
        without explanation
      </div>
    </li>
    <li className={styles.item}>
      <div className={styles.icons}>
        <Delivery />
      </div>
      <div className={styles.content}>
        Delivery in Europe
        <br />
        from 5 to 10 days
      </div>
    </li>
  </ul>
);

export default AdvantagesList;
