import React from 'react';

import SimpleSlider from '../components/SimpleSlider/SimpleSlider';
import PopularModels from '../components/PopularModels/PopularModels';
import Partners from '../components/Partners/Partners';

const HomePage = () => (
  <main>
    <SimpleSlider />
    <PopularModels />
    <Partners />
  </main>
);

export default HomePage;
