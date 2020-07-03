import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Error.scss';
import { ReactComponent as ErrorIcon } from '../assets/static/icons/error.svg';

const Error = ({ message }) => (
  <div className="error">
    <ErrorIcon className="error__icon" />
    <strong className="error__message">{message}</strong>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
