import React from 'react';

import navigation from '../../configs/header-navigation';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Social from '../Social/Social';
import PhoneBlock from '../PhoneBlock/PhoneBlock';

import styles from './AppFooter.module.css';

const AppFooter = () => (
  <>
    <footer className={styles.appFooter}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo theme="footer" />
          </div>
          <div className={styles.nav}>
            <Navigation items={navigation} />
          </div>
          <div className={styles.share}>
            <h3 className={styles.shareTitle}>Share with friends</h3>
            <Social />
          </div>
          <div className={styles.phone}>
            <PhoneBlock />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>Copyright © 2019</div>
      </div>
    </footer>
  </>
);

export default AppFooter;
