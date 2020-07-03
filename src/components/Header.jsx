import React from 'react';
import '../assets/styles/components/Header.scss';
import { ReactComponent as Logo } from '../assets/static/icons/logo.svg';
import { ReactComponent as SearchIcon } from '../assets/static/icons/search.svg';

const Header = () => (
  <header className="header">
    <Logo className="header__logo" />
    <form className="header__search">
      <input
        className="header__search__input"
        type="text"
        placeholder="Buscar producto..."
      />
      <button className="header__search__button" type="submit">
        <SearchIcon className="header__search__button__icon" />
      </button>
    </form>
  </header>
);

export default Header;
