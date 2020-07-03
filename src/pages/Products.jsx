import React from 'react';
import PropTypes from 'prop-types';
import ProductsSection from '../components/ProductsSection';
import Section from '../components/Section';

const Products = ({ match }) => {
  window.scrollTo(0, 0);
  const { params, path } = match;
  const query = path.includes('/category/')
    ? `&category__slug=${params.query}`
    : '';

  return (
    <Section title={params.title}>
      <ProductsSection title={params.title} productsPerPage={12} query={query} />
    </Section>
  );
};

Products.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Products;
