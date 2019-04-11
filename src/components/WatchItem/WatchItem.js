import React from 'react';
import img from '../SimpleSlider/assets/test.png'; // delete
import { ReactComponent as Mark } from './assets/mark.svg';
import { ReactComponent as Zoom } from './assets/zoom.svg';

import styles from './WatchItem.module.css';

const WatchItem = ({ marker = 'hit' }) => {
  const markerClasses = [styles.mark];
  if (marker === 'hit') {
    markerClasses.push(styles.hit);
  }
  if (marker === 'new') {
    markerClasses.push(styles.new);
  }
  if (marker === 'sale') {
    markerClasses.push(styles.sale);
  }
  return (
    <div className={styles.item}>
      <div className={markerClasses.join(' ')}>
        <Mark />
        <span className={styles.markerText}>{marker}</span>
      </div>
      <div className={styles.zoom}>
        <Zoom />
      </div>
      <img className={styles.watchImg} src={img} alt="alt" />
      <div className={styles.model}>Casio Edifice EQB-501XBL-2AER</div>
      <div className={styles.prise}>30,000.00</div>
      {marker === 'sale' ? null : (
        <button type="button" className={styles.btn}>
          Buy
        </button>
      )}
    </div>
  );
};

export default WatchItem;
