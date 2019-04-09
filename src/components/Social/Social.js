import React from 'react';
import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as Google } from './assets/google.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as Viber } from './assets/viber.svg';

import styles from './Social.module.css';

const socialIcons = [
  { name: Facebook, id: 'Facebook' },
  { name: Google, id: 'Google' },
  { name: Instagram, id: 'Instagram' },
  { name: Linkedin, id: 'Linkedin' },
  { name: Twitter, id: 'Twitter' },
  { name: Viber, id: 'Viber' },
];

const Social = () => (
  <div className={styles.social}>
    {socialIcons.map(icon => (
      <a className={styles.link} href="/" key={icon.id}>
        <icon.name />
      </a>
    ))}
  </div>
);

export default Social;
