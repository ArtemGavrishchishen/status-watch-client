import React from 'react';
import Slider from 'react-slick';

import SliderItem from './SliderItem';
import img from './assets/test.png';

import styles from './SimpleSlider.module.css';

const settings = {
  dots: true,
  fade: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
};

const init = [
  {
    id: 1,
    slideTitle: 'Casio Edifice EQB-501XBL-2AER',
    slideDescription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    imgSrc: img,
  },
  {
    id: 2,
    slideTitle: 'Casio Edifice EQB-501XBL-2AER',
    slideDescription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    imgSrc: img,
  },
];

const SimpleSlider = ({ items = init }) => (
  <>
    {items.length !== 0 && (
      <div className={styles.simpleSlider}>
        <div className={styles.simpleSliderContainer}>
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
