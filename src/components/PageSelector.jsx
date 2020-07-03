import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/PageSelector.scss';

const PageSelector = ({ actual, text, link, setEndPoint }) => {
  const changePage = () => {
    if (text !== '...') {
      setEndPoint(link);
    }
  };

  return (
    <li className="page-selector" onClick={changePage}>
      <span className={`page-selector__text${actual ? '--actual' : ''}`}>
        {text}
      </span>
    </li>
  );
};

PageSelector.propTypes = {
  actual: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  setEndPoint: PropTypes.func.isRequired,
};

export default PageSelector;
