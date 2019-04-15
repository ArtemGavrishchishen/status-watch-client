import React from 'react';

import { ReactComponent as Mark } from './assets/mark.svg';
import { ReactComponent as Zoom } from './assets/zoom.svg';

import styles from './WatchItem.module.css';

const WatchItem = ({ label, brand, model, price, img }) => {
  const markerClasses = [styles.mark];
  if (label === 'hit') {
    markerClasses.push(styles.hit);
  }
  if (label === 'new') {
    markerClasses.push(styles.new);
  }
  if (label === 'sale') {
    markerClasses.push(styles.sale);
  }
  return (
    <div className={styles.item}>
      <div className={markerClasses.join(' ')}>
        <Mark />
        <span className={styles.markerText}>{label}</span>
      </div>
      <div className={styles.zoom}>
        <Zoom />
      </div>
      <img className={styles.watchImg} src={img[0]} alt={brand} />
      <div className={styles.model}>
        {brand} {model}
      </div>
      <div className={styles.prise}>{price}.00 USD</div>
      {label === 'sale' ? null : (
        <button type="button" className={styles.btn}>
          Buy
        </button>
      )}
    </div>
  );
};

export default WatchItem;
