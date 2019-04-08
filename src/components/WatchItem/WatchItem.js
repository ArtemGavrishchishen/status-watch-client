import React from 'react';
import img from '../SimpleSlider/assets/test.png'; // delete

import styles from './WatchItem.module.css';

const WatchItem = () => (
  <div className={styles.container}>
    <div className={styles.mark}>1</div>
    <div className={styles.zoom}>2</div>
    <img className={styles.watchImg} src={img} alt="alt" />
    <div className={styles.model}>Casio Edifice EQB-501XBL-2AER</div>
    <div className={styles.prise}>3</div>
    <button type="button" className={styles.btn}>
      Sale
    </button>
  </div>
);

export default WatchItem;