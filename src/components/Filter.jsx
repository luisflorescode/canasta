import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import '../assets/styles/components/Filter.scss';
import { ReactComponent as CloseIcon } from '../assets/static/icons/close.svg';

const Filter = ({
  isOpen,
  setOpenFilter,
  deliveryDate,
  addDeliveryDate,
  deliveryZone,
  addDeliveryZone,
  priceRange,
  addPriceRange,
  clearFilter,
}) => {
  const handleChangeDeliveryDate = (event) => {
    const { value } = event.target;
    addDeliveryDate(value);
    event.preventDefault();
  };

  const handleChangeDeliveryZone = (event) => {
    const { value } = event.target;
    addDeliveryZone(value);
    event.preventDefault();
  };

  const handleChangePriceRange = (event) => {
    const { value } = event.target;
    addPriceRange(value);
    event.preventDefault();
  };

  const FilterForm = () => (
    <form className="filter-form">
      <h1 className="filter-form__title">Filtros</h1>
      <label>
        Día de Entrega
        <input
          type="date"
          value={deliveryDate}
          onChange={handleChangeDeliveryDate}
        />
      </label>
      <label>
        Zona de Entrega
        <select value={deliveryZone} onChange={handleChangeDeliveryZone}>
          <option value="">Todas</option>
          <option value="national">Envío Nacional</option>
          <option value="area-metropolitana">CDMX</option>
          <option value="monterrey">Monterrey</option>
        </select>
      </label>
      <label>
        Rango de Precio
        <select value={priceRange} onChange={handleChangePriceRange}>
          <option value="">Todos</option>
          <option value="1">Debajo de $100</option>
          <option value="2">$100 a $200</option>
          <option value="3">$200 a $300</option>
          <option value="4">$300 a $400</option>
          <option value="5">$400 a $500</option>
          <option value="6">$500 o más</option>
        </select>
      </label>
    </form>
  );

  return (
    <>
      {isOpen
        && createPortal(
          <div className="filter">
            <div className="filter__container">
              <button
                className="filter__container__close"
                type="button"
                onClick={() => {
                  setOpenFilter(false);
                }}
              >
                <CloseIcon className="filter__container__close__icon" />
              </button>
              <FilterForm />
              <button
                className="filter__container__clear"
                type="button"
                onClick={clearFilter}
              >
                Eliminar filtros
              </button>
            </div>
          </div>,
          document.getElementById('modal'),
        )}
    </>
  );
};

Filter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpenFilter: PropTypes.func.isRequired,
  deliveryDate: PropTypes.string.isRequired,
  addDeliveryDate: PropTypes.func.isRequired,
  deliveryZone: PropTypes.string.isRequired,
  addDeliveryZone: PropTypes.func.isRequired,
  priceRange: PropTypes.string.isRequired,
  addPriceRange: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
};

export default Filter;
