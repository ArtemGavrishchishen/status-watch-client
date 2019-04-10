import React from 'react';

import styles from './Banner.module.css';

const Banner = () => (
  <div className={styles.banner}>
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>
    </div>
  </div>
);

export default Banner;
