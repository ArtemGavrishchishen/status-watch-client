import React from 'react';

import breitling from './assets/breitling.png';
import cvstos from './assets/cvstos.png';
import hublot from './assets/hublot.png';
import op from './assets/op.png';
import pp from './assets/pp.png';
import rolex from './assets/rolex.png';

import styles from './Partners.module.css';

const brandImg = [
  { src: breitling, id: 'breitling' },
  { src: cvstos, id: 'cvstos' },
  { src: hublot, id: 'hublot' },
  { src: op, id: 'op' },
  { src: pp, id: 'pp' },
  { src: rolex, id: 'rolex' },
];

const Partners = () => (
  <div className={styles.partners}>
    <div className={styles.container}>
      <div className={styles.list}>
        {brandImg.map(brand => (
          <img src={brand.src} alt={brand.id} key={brand.id} />
        ))}
      </div>
    </div>
  </div>
);

export default Partners;
