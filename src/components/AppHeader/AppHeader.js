import React from 'react';

import navigation from '../../configs/header-navigation';

import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const AppHeaderView = () => (
  <header>
    <Navigation items={navigation} />
    <Logo theme="header" />
  </header>
);

export default AppHeaderView;
