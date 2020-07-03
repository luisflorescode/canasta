import React from 'react';
import useFetch from '../hooks/useFetch';
import Category from './Category';
import Loader from './Loader';
import Error from './Error';

const CategoriesList = () => {
  const { data, loading, error } = useFetch('/categories');

  return (
    <>
      {loading && <Loader message="Cargando categorías..." />}
      {error && (
        <Error message="Ha ocurrido un error al obtener las categorías." />
      )}
      {data && (
        <div className="categories-list">
          {data.map((category) => (
            <Category
              key={category.slug}
              name={category.name}
              slug={category.slug}
              photo={category.photo.big}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CategoriesList;
