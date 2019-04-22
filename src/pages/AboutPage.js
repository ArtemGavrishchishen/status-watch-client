import React from 'react';

import Map from '../components/Map/Map';

import styles from './AboutPage.module.css';

const AboutPage = () => (
  <main>
    <div className={styles.container}>
      <h1>AboutPage</h1>
    </div>

    <div className={styles.map}>
      <Map />
    </div>
  </main>
);

export default AboutPage;
