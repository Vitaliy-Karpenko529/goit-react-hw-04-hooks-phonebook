
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find name
    <input className={s.input} type="text" value={value} onChange={onChange} />
  </label>
);

Filter.protoTypes = {
  onChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
