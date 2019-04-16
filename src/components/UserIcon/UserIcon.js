import React from 'react';
import { ReactComponent as User } from './assets/User.svg';

import styles from './UserIcon.module.css';

const UserIcon = () => (
  <div className={styles.user}>
    <User />
  </div>
);

export default UserIcon;
