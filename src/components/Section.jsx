import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Section.scss';

const Section = ({ title, children }) => (
  <section className="section">
    <div className="section__head">
      <h1 className="section__head__title">{title}</h1>
    </div>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Section;
