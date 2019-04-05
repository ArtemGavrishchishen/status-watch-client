import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from './assets/cart.svg';

import styles from './CartIcon.module.css';

const CartIcon = () => (
  <div className={styles.cart}>
    <Link to="/cart">
      <Cart />
    </Link>
  </div>
);

export default CartIcon;
