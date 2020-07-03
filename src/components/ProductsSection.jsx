import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import '../assets/styles/components/ProductsSection.scss';
import Loader from './Loader';
import Error from './Error';
import ProductsList from './ProductsList';
import PageSelectorsList from './PageSelectorsList';
import Sorting from './Sorting';

const ProductsSection = ({ productsPerPage, query }) => {
  const defaultEndPoint = `${process.env.REACT_APP_API}/products?page_size=${productsPerPage}${query}`;
  const [endPoint, setEndPoint] = useState(defaultEndPoint);
  const [sorting, setSorting] = useState('');
  const { data, loading, error } = useFetch(endPoint);

  const addSorting = (value) => {
    setSorting(value);
    setEndPoint(
      `${process.env.REACT_APP_API}/products?page_size=${productsPerPage}${query}&ordering=${value}`,
    );
  };

  return (
    <>
      {loading && <Loader message="Cargando productos..." />}
      {error && (
        <Error message="Ha ocurrido un error al obtener los productos." />
      )}
      {data && (
        <div className="products-section">
          <div className="products-section__sorting">
            <span className="products-section__sorting__count">
              {`${data.count} productos`}
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
    </>
  );
};

ProductsSection.propTypes = {
  productsPerPage: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};

export default ProductsSection;
