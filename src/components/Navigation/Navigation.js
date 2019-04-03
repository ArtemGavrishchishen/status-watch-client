import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map(({ name, path }) => (
      <li key={name}>
        <NavLink
          exact
          to={path}
          className={styles.link}
          activeClassName={styles.active}
        >
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
