import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className='header'>
      <h1 className='headerTitle'>Marcelo<br/><span>Arancibia</span></h1>
      <nav className='menu'>
        <img className='menuImg' src="./img/burgerbtn.png" alt="" />
      </nav>
    </header>
  )
}

export default Navbar
