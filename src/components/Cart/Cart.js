import React from 'react';

import siteURL from '../../configs/siteURL';

import styles from './Cart.module.css';

const Cart = ({ items = [], removeWatchFromCart }) =>
  items.length > 0 ? (
    <table className={styles.table} cellPadding="0" cellSpacing="0">
      <thead className={styles.thead}>
        <tr>
          <td className={styles.products}>Products</td>
          <td className={styles.price}>Price</td>
          <td className={styles.count}>Count</td>
          <td className={styles.cost}>Cost</td>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, brand, model, img, price, amount }) => (
          <tr key={id} className={styles.row}>
            <td>
              <div className={styles.productInfo}>
                <img
                  className={styles.watchImg}
                  src={`${siteURL}/${img[0]}`}
                  alt={brand}
                  height="150"
                />
                <span className={styles.name}>
                  {brand} {model}
                </span>
              </div>
            </td>
            <td>
              <span className={styles.price}>{price}</span>
            </td>
            <td>
              <button className={styles.increment}>+</button>
              <span className={styles.count}>{amount}</span>
              <button className={styles.decrement}>-</button>
            </td>
            <td>
              <span className={styles.cost}>{price * amount}</span>
              <button onClick={() => removeWatchFromCart(id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h3 className={styles.noWatches}>There are no products in the cart!</h3>
  );

export default Cart;
