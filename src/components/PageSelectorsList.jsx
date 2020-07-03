import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/PageSelectorsList.scss';
import PageSelector from './PageSelector';

const PageSelectorsList = ({ previous, pages, next, setEndPoint }) => (
  <ul className="page-selectors-list">
    {previous && (
      <PageSelector actual={false} text="Anterior" link={previous} setEndPoint={setEndPoint} />
    )}
    {pages
      && pages.map(({ actual, number, link }, index) => {
        const numberString = () => (typeof number !== 'string' ? number.toString() : number);
        const text = numberString();

        return (
          <PageSelector
            key={index}
            actual={actual}
            text={text}
            link={link}
            setEndPoint={setEndPoint}
          />
        );
      })}
    {next && <PageSelector actual={false} text="Siguiente" link={next} setEndPoint={setEndPoint} />}
  </ul>
);

PageSelectorsList.propTypes = {
  previous: PropTypes.string,
  pages: PropTypes.array,
  next: PropTypes.string,
  setEndPoint: PropTypes.func.isRequired,
};

PageSelectorsList.defaultProps = {
  previous: '',
  pages: [],
  next: '',
};

export default PageSelectorsList;
