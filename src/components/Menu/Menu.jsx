import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className='navbar'>
      <h1 className='headerTitle'>Marcelo<br/><span>Arancibia</span></h1>
      <div className={`navbar__bg ${menuOpen ? 'navbar__bg--open' : ''}`} />
      <button className='navbar__btn' onClick={toggleMenu}>|||</button>
      <ul className={`navbar-menu ${menuOpen ? 'navbar-menu--open' : ''}`} >
        <button className='navbar-menu__btn' onClick={toggleMenu}>X</button>
        <li className='navbar-menu__item'>¿QUIÉN SOY?</li>
        <li className='navbar-menu__item'>PROPUESTAS</li>
        <li className='navbar-menu__item'>IMÁGENES</li>
        <li className='navbar-menu__item'>CONTACTO</li>
      </ul>
    </nav>
  )
}

export default Menu
