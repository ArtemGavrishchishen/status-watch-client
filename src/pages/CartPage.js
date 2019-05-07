import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart/Cart';

import { watchesSelectors, watchesOperations } from '../redux/watches';

import styles from './CartPage.module.css';

const test = [
  {
    id: 'm-18463-615',
    amount: 1,
  },
  {
    id: 'm-02561-360',
    amount: 3,
  },
  {
    id: 'm-02605-830',
    amount: 2,
  },
];

class CartPage extends Component {
  state = {};

  componentDidMount() {
    const { fetchWatches } = this.props;

    fetchWatches();
  }

  render() {
    return (
      <main>
        <section className={styles.cart}>
          <div className={styles.container}>
            <h2>Placing an order</h2>
            <Cart watshes={test} />
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  watches: watchesSelectors.getWatchesItems(state),
});

const mapDispatchToProps = {
  fetchWatches: watchesOperations.fetchWatchesItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
