import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart/CartContainer';

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
