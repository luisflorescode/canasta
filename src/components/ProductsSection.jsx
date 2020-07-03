import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import '../assets/styles/components/ProductsSection.scss';
import { ReactComponent as FilterIcon } from '../assets/static/icons/filter.svg';
import Loader from './Loader';
import Error from './Error';
import ProductsList from './ProductsList';
import PageSelectorsList from './PageSelectorsList';
import Sorting from './Sorting';
import Filter from './Filter';

const ProductsSection = ({ title, productsPerPage, query }) => {
  const defaultEndPoint = `${process.env.REACT_APP_API}/products?page_size=${productsPerPage}${query}`;
  const [endPoint, setEndPoint] = useState(defaultEndPoint);
  const [sorting, setSorting] = useState('');
  const [sortingQuery, setSortingQuery] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryDateQuery, setDeliveryDateQuery] = useState('');
  const [deliveryZone, setDeliveryZone] = useState('');
  const [deliveryZoneQuery, setDeliveryZoneQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [priceRangeQuery, setPriceRangeQuery] = useState('');
  const { data, loading, error } = useFetch(endPoint);

  useEffect(() => {
    setEndPoint(
      `${process.env.REACT_APP_API}/products?page_size=${productsPerPage}${query}${sortingQuery}${deliveryDateQuery}${deliveryZoneQuery}${priceRangeQuery}`,
    );
  }, [productsPerPage, query, sortingQuery, deliveryDateQuery, deliveryZoneQuery, priceRangeQuery]);

  const addSorting = (value) => {
    setSorting(value);
    setSortingQuery(`&ordering=${value}`);
  };

  const addDeliveryDate = (value) => {
    setDeliveryDate(value);
    if (!value) {
      setDeliveryDateQuery(value);
    } else {
      setDeliveryDateQuery(`&delivery_date=${value}`);
    }
  };

  const addDeliveryZone = (value) => {
    setDeliveryZone(value);
    if (!value) {
      setDeliveryZone(value);
    } else {
      setDeliveryZoneQuery(`&zone=${value}`);
    }
  };

  const addPriceRange = (value) => {
    setPriceRange(value);
    switch (value) {
      case '1':
        setPriceRangeQuery('&max_price=100');
        break;
      case '2':
        setPriceRangeQuery('&min_price=100&max_price=200');
        break;
      case '3':
        setPriceRangeQuery('&min_price=200&max_price=300');
        break;
      case '4':
        setPriceRangeQuery('&min_price=300&max_price=400');
        break;
      case '5':
        setPriceRangeQuery('&min_price=400&max_price=500');
        break;
      case '6':
        setPriceRangeQuery('&min_price=500');
        break;
      default:
        setPriceRangeQuery('');
        break;
    }
  };

  const clearFilter = () => {
    addDeliveryDate('');
    addDeliveryZone('');
    addPriceRange('');
  };

  return (
    <>
      {loading && <Loader message="Cargando productos..." />}
      {error && (
        <Error message="Ha ocurrido un error al obtener los productos." />
      )}
      {data && (
        <div className="products-section">
          <div className="products-section__filter">
            <small className="products-section__filter__flow">
              <Link className="products-section__filter__flow__link" to="/">
                Home
              </Link>
              {' > '}
              <span className="products-section__filter__flow__category">
                {title}
              </span>
              {` (${data.count} productos)`}
            </small>
            <button
              className="products-section__filter__button"
              type="button"
              onClick={() => {
                setOpenFilter(true);
              }}
            >
              <FilterIcon className="products-section__filter__button__icon" />
              Filtros
            </button>
          </div>
          <div className="products-section__sorting">
            <span className="products-section__sorting__count">
              {`${data.count} productos${
                deliveryDate || deliveryZone || priceRange
                  ? ' (Filtros aplicados)'
                  : ''
              }`}
            </span>
            <Sorting sorting={sorting} addSorting={addSorting} />
          </div>
          <ProductsList products={data.results} />
          <PageSelectorsList
            previous={data.previous}
            pages={data.pages}
            next={data.next}
            setEndPoint={setEndPoint}
          />
        </div>
      )}
      <Filter
        isOpen={openFilter}
        setOpenFilter={setOpenFilter}
        deliveryDate={deliveryDate}
        addDeliveryDate={addDeliveryDate}
        deliveryZone={deliveryZone}
        addDeliveryZone={addDeliveryZone}
        priceRange={priceRange}
        addPriceRange={addPriceRange}
        clearFilter={clearFilter}
      />
    </>
  );
};

ProductsSection.propTypes = {
  title: PropTypes.string.isRequired,
  productsPerPage: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};

export default ProductsSection;
