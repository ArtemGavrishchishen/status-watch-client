import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as User } from './assets/User.svg';

import styles from './UserIcon.module.css';

const UserIcon = () => (
  <div className={styles.user}>
    <Link to="/user">
      <User />
    </Link>
  </div>
);

export default UserIcon;
