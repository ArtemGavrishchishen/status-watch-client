import React from 'react';

import styles from './AdvantagesList.module.css';

const AdvantagesList = () => (
  <ul className={styles.list}>
    <li>
      1 year warranty.
      <br />
      Service and quality
    </li>
    <li>
      Return of goods
      <br />
      without explanation
    </li>
    <li>
      Delivery in Europe
      <br />
      from 5 to 10 days
    </li>
  </ul>
);

export default AdvantagesList;
