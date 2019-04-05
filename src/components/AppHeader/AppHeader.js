import React from 'react';

import navigation from '../../configs/header-navigation';
//= ==headerTop
import Navigation from '../Navigation/Navigation';
import UserIcon from '../UserIcon/UserIcon';
import CartIcon from '../CartIcon/CartIcon';
//= ==headerBody
import Logo from '../Logo/Logo';
import AdvantagesList from '../AdvantagesList/AdvantagesList';
import PhoneBlock from '../PhoneBlock/PhoneBlock';

import styles from './AppHeader.module.css';

const AppHeaderView = () => (
  <header className={styles.header}>
    <div className={styles.headerTop}>
      <div className={styles.headerContainer}>
        <Navigation items={navigation} />
        <div className={styles.headerIcon}>
          <UserIcon />
          <CartIcon />
        </div>
      </div>
    </div>

    <div className={styles.headerBody}>
      <div className={styles.headerContainer}>
        <Logo theme="header" />
        <AdvantagesList />
        <div className={styles.phoneBlock}>
          <PhoneBlock />
        </div>
      </div>
    </div>
  </header>
);

export default AppHeaderView;
