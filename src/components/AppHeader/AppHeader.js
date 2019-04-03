import React from 'react';

import navigation from '../../configs/header-navigation';

import Navigation from '../Navigation/Navigation';

const AppHeaderView = () => (
  <header>
    <Navigation items={navigation} />
  </header>
);

export default AppHeaderView;
