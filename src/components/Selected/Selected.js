import React from 'react';
import Select from 'react-select';

import styles from './Selected.module.css';

const Selected = ({ selectedOption, handleChange, options, placeholder }) => (
  <Select
    className={styles.selected}
    value={selectedOption}
    onChange={handleChange}
    options={options}
    isClearable
    placeholder={placeholder}
  />
);

export default Selected;
