import React from 'react';

import SimpleSlider from '../components/SimpleSlider/SimpleSlider';
import PopularModels from '../components/PopularModels/PopularModels';
import Banner from '../components/Banner/Banner';
import Partners from '../components/Partners/Partners';

const HomePage = () => (
  <main>
    <SimpleSlider />
    <PopularModels />
    <Banner />
    <Partners />
  </main>
);

export default HomePage;
