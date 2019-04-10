import React from 'react';

import styles from './SimpleSlider.module.css';

const SliderItem = ({
  id,
  title = '',
  description = '',
  imgSrc = '',
  imgAlt = '',
}) => (
  <div className={styles.item}>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => console.log('click', id)}
      >
        More
      </button>
    </div>
    <img className={styles.slideImg} src={imgSrc} alt={imgAlt} />
  </div>
);

export default SliderItem;
