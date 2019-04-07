import React from 'react';

import styles from './SimpleSlider.module.css';

const SliderItem = ({
  id,
  slideTitle = '',
  slideDescription = '',
  imgSrc = '',
  imgAlt = '',
}) => (
  <div className={styles.sliderItem}>
    <div className={styles.sliderItemContent}>
      <h3 className={styles.sliderItemTitle}>{slideTitle}</h3>
      <p className={styles.sliderItemDesc}>{slideDescription}</p>
      <button
        className={styles.sliderItemBtn}
        type="button"
        onClick={() => console.log('click', id)}
      >
        More
      </button>
    </div>
    <img className={styles.simpleSlideImg} src={imgSrc} alt={imgAlt} />
  </div>
);

export default SliderItem;
