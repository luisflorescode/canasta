import React from 'react';
import PropTypes from 'prop-types';

const Sorting = ({ sorting, addSorting }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    addSorting(value);
  };

  return (
    <form>
      <label>
        Ordenar por:
        {' '}
        <select value={sorting} onChange={handleChange}>
          <option value="date">Fecha</option>
          <option value="price">Precio</option>
          <option value="name">Nombre</option>
        </select>
      </label>
    </form>
  );
};

Sorting.propTypes = {
  sorting: PropTypes.string.isRequired,
  addSorting: PropTypes.func.isRequired,
};

export default Sorting;
