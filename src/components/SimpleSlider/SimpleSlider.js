import React from 'react';
import Slider from 'react-slick';

import SliderItem from './SliderItem';

import styles from './SimpleSlider.module.css';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
};

const SimpleSlider = ({ items }) => (
  <>
    {items.length !== 0 && (
      <div className={styles.simpleSlider}>
        <div className={styles.container}>
          <Slider {...settings}>
            {items.map(item => (
              <SliderItem key={item.id} {...item} />
            ))}
          </Slider>
        </div>
      </div>
    )}
  </>
);

export default SimpleSlider;
