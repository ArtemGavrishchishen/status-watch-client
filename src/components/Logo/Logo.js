import React from 'react';

import styles from './Logo.module.css';

const Logo = ({ theme = '' }) => {
  const logoClasses = [styles.logo];
  if (theme === 'header') {
    logoClasses.push(styles.logoHeader);
  }
  if (theme === 'footer') {
    logoClasses.push(styles.logoFooter);
  }
  return (
    <div className={logoClasses.join(' ')}>
      <div className={styles.logoTitle}>Status watch</div>
      <div>
        <ul className={styles.list}>
          <li>Atribute</li>
          <li>|</li>
          <li>Succsess</li>
          <li>|</li>
          <li>Shop</li>
        </ul>
      </div>
    </div>
  );
};

export default Logo;
