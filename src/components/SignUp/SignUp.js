import React, { Component } from 'react';

import styles from './SignUp.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
  passwordRepiate: '',
};

export default class SignUp extends Component {
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
    const { name, email, phone, password, passwordRepiate } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmitForm}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChangeInput}
              placeholder="NAME"
            />
          </li>
          <li className={styles.item}>
            <input
              className={styles.input}
              type="text"
              name="email"
              value={email}
              onChange={this.handleChangeInput}
              placeholder="EMAIL"
            />
          </li>
          <li className={styles.item}>
            <input
              className={styles.input}
              type="text"
              name="phone"
              value={phone}
              onChange={this.handleChangeInput}
              placeholder="PHONE"
            />
          </li>
          <li className={styles.item}>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChangeInput}
              placeholder="PASSWORD"
            />
          </li>
          <li className={styles.item}>
            <input
              className={styles.input}
              type="password"
              name="passwordRepiate"
              value={passwordRepiate}
              onChange={this.handleChangeInput}
              placeholder="PASSWORD"
            />
          </li>
        </ul>
        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}
