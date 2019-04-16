import React, { Component } from 'react';

import styles from './SignIn.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmitForm}>
        <input
          className={styles.input}
          type="text"
          name="email"
          value={email}
          onChange={this.handleChangeInput}
          placeholder="Email"
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={this.handleChangeInput}
          placeholder="Password"
        />
        <button className={styles.btn} type="submit">
          Sign In
        </button>
      </form>
    );
  }
}
