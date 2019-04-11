import React from 'react';

import SimpleSlider from '../components/SimpleSlider/SimpleSlider';
import PopularModels from '../components/PopularModels/PopularModels';
import Banner from '../components/Banner/Banner';
import Partners from '../components/Partners/Partners';

import styles from './HomePage.module.css';

const HomePage = () => (
  <main>
    <section className={styles.slider}>
      <SimpleSlider />
    </section>
    <section className={styles.popular}>
      <PopularModels />
    </section>
    <section className={styles.banner}>
      <Banner />
    </section>
    <section className={styles.partners}>
      <Partners />
    </section>
  </main>
);

export default HomePage;
