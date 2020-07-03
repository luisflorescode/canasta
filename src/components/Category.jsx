import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/styles/components/Category.scss';
import defaultImg from '../assets/static/images/default-category.png';

const Category = ({ name, slug, photo }) => (
  <Link to={`/${slug}`}>
    <figure className="category">
      <img className="category__img" src={photo || defaultImg} alt={name} />
      <figcaption className="category__name">{name}</figcaption>
    </figure>
  </Link>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Category;
