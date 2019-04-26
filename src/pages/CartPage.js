import React from 'react';

import Cart from '../components/Cart/Cart';

import styles from './CartPage.module.css';

const test = [
  { id: 1, brand: 2, model: 3, img: 4, price: 5, amount: 6 },
  { id: 11, brand: 22, model: 33, img: 44, price: 55, amount: 66 },
];

const CartPage = () => (
  <main>
    <section className={styles.cart}>
      <div className={styles.container}>
        <h2>Placing an order</h2>
        <Cart watshes={test} />
      </div>
    </section>
  </main>
);

export default CartPage;
