import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/ProductsList.scss';
import Product from './Product';

const ProductsList = ({ products }) => (
  <ul className="products-list">
    {products.map(({ id, photo, name, store, price, currency }) => {
      const image = photo.medium;
      const storeName = store.name;
      const productPrice = `$${price} ${currency.value}`;

      return (
        <Product
          key={id}
          photo={image}
          name={name}
          store={storeName}
          price={productPrice}
        />
      );
    })}
  </ul>
);

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
