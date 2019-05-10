import React from 'react';

import siteURL from '../../configs/siteURL';

import styles from './Cart.module.css';

const Cart = ({ items = [], removeWatchFromCart, add, decrement }) =>
  items.length > 0 ? (
    <table className={styles.table} cellPadding="0" cellSpacing="0">
      <thead className={styles.thead}>
        <tr className={styles.row}>
          <th colSpan="2" />
          <th>Count</th>
          <th>Price</th>
          <th>Cost</th>
          <th />
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {items.map(({ id, brand, model, img, price, amount }) => (
          <tr key={id} className={styles.row}>
            <td className={styles.img}>
              <img src={`${siteURL}/${img[0]}`} alt={brand} />
            </td>
            <td className={styles.name}>
              {brand} {model}
            </td>
            <td className={styles.count}>
              <button className={styles.btn} onClick={() => decrement(id)}>
                -
              </button>
              <span>{amount}</span>
              <button className={styles.btn} onClick={() => add(id)}>
                +
              </button>
            </td>
            <td className={styles.price}>{price}.00 USD</td>
            <td className={styles.cost}>{price * amount}.00 USD</td>
            <td className={styles.remove}>
              <button onClick={() => removeWatchFromCart(id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className={styles.tfoot}>
        <tr>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tfoot>
    </table>
  ) : (
    <h3 className={styles.noWatches}>There are no products in the cart!</h3>
  );

export default Cart;
