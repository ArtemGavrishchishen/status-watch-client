import React from 'react';

import { ReactComponent as Phone } from './assets/cellphone.svg';

import styles from './PhoneBlock.module.css';

const PhoneBlock = () => (
  <ul className={styles.list}>
    <li>
      <span className={styles.phoneIcon}>
        <Phone />
      </span>
      +0(000) 000-00-00
    </li>
    <li>
      <span className={styles.phoneIcon}>
        <Phone />
      </span>
      +0(000) 000-00-00
    </li>
  </ul>
);

export default PhoneBlock;
