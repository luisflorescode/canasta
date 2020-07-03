import React from 'react';
import '../assets/styles/pages/Menu.scss';
import CategoriesList from '../components/CategoriesList';

const Menu = () => (
  <section className="menu">
    <div className="menu__head">
      <h1 className="menu__head__title">Categorías</h1>
    </div>
    <CategoriesList />
  </section>
);

export default Menu;
