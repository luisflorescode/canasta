import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Loader from './Loader';
import Error from './Error';
import ProductsList from './ProductsList';
import PageSelectorsList from './PageSelectorsList';

const ProductsSection = ({ productsPerPage, query }) => {
  const defaultEndPoint = `${process.env.REACT_APP_API}/products?page_size=${productsPerPage}${query}`;
  const [endPoint, setEndPoint] = useState(defaultEndPoint);
  const { data, loading, error } = useFetch(endPoint);

  return (
    <>
      {loading && <Loader message="Cargando productos..." />}
      {error && (
        <Error message="Ha ocurrido un error al obtener los productos." />
      )}
      {data && (
        <>
          <ProductsList products={data.results} />
          <PageSelectorsList
            previous={data.previous}
            pages={data.pages}
            next={data.next}
            setEndPoint={setEndPoint}
          />
        </>
      )}
    </>
  );
};

ProductsSection.propTypes = {
  productsPerPage: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};

export default ProductsSection;
