import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Product.scss';
import defaultProduct from '../assets/static/images/default-category.png';

const Product = ({ photo, name, store, price }) => (
  <li className="product">
    <img className="product__photo" src={photo || defaultProduct} alt={name} />
    <div className="product__details">
      <h3 className="product__details__name">{name}</h3>
      <span className="product__details__store">{store}</span>
      <strong className="product__details__price">{price}</strong>
    </div>
  </li>
);

Product.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  store: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
