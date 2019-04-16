import React from 'react';
import { connect } from 'react-redux';

import navigation from '../../configs/header-navigation';
//= ==headerTop
import Navigation from '../Navigation/Navigation';
import UserIcon from '../UserIcon/UserIcon';
import CartIcon from '../CartIcon/CartIcon';
//= ==headerBody
import Logo from '../Logo/Logo';
import AdvantagesList from '../AdvantagesList/AdvantagesList';
import PhoneBlock from '../PhoneBlock/PhoneBlock';

import { modalActions } from '../../redux/modal';

import styles from './AppHeader.module.css';

const AppHeader = props => {
  const { toggleModal } = props;
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerContainer}>
          <Navigation items={navigation} />
          <div className={styles.headerIcon}>
            <div onClick={toggleModal}>
              <UserIcon />
            </div>
            <CartIcon />
          </div>
        </div>
      </div>

      <div className={styles.headerBody}>
        <div className={styles.headerContainer}>
          <Logo theme="header" />
          <AdvantagesList />
          <div className={styles.phone}>
            <PhoneBlock />
          </div>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = {
  toggleModal: modalActions.toggleModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(AppHeader);
