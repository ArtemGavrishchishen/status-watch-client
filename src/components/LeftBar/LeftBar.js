import React from 'react';

import styles from './LeftBar.module.css';

const LeftBar = ({ count = '10', products = '30' }) => (
  <div className={styles.bar}>
    <div className={styles.title}>Filter</div>
    <div className={styles.content}>
      <form className={styles.form}>
        <div className={styles.header}>
          <div
            className={styles.counter}
          >{`${count} products from ${products}`}</div>
          <button type="button" className={styles.btn}>
            x
          </button>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>2</li>
        </ul>
      </form>
    </div>
  </div>
);

export default LeftBar;
