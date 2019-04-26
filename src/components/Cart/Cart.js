import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ watshes = [], removeWatchFromCart }) =>
  watshes.length > 0 ? (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <td className={styles.products}>Products</td>
          <td className={styles.price}>Price</td>
          <td className={styles.count}>Count</td>
          <td className={styles.cost}>Cost</td>
        </tr>
      </thead>
      <tbody>
        {watshes.map(({ id, brand, model, img, price, amount }) => (
          <tr key={id}>
            <td>
              <img className={styles.watchImg} src={img} alt={brand} />
              <span className={styles.name}>
                {brand} {model}
              </span>
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
