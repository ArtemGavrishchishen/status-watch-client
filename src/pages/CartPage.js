import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart/Cart';

import { watchesOperations } from '../redux/watches';
import { cartSelectors } from '../redux/cart';

import styles from './CartPage.module.css';

class CartPage extends Component {
  state = {};

  componentDidMount() {
    const { fetchWatches } = this.props;

    fetchWatches();
  }

  render() {
    const { watches } = this.props;
    return (
      <main>
        <section className={styles.cart}>
          <div className={styles.container}>
            <h2>Placing an order</h2>
            <Cart items={watches} />
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  watches: cartSelectors.getCartWatches(state),
});

const mapDispatchToProps = {
  fetchWatches: watchesOperations.fetchWatchesItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
