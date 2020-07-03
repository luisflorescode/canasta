import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Loader.scss';

const Loader = ({ message }) => (
  <div className="loader">
    <div className="loader__icon" />
    <strong className="loader__message">{message}</strong>
  </div>
);

Loader.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Loader;
