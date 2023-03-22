import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://facebook.com/MarceloArancibiaSJ" target={'_blank'}><img className='socialIcon' src="./img/icons/face.png" alt='Logo Facebook' /></a>
        <a href="https://twitter.com/MarceArancibia_" target={'_blank'}><img className='socialIcon' src="./img/icons/insta.png" alt='Logo Instagram' /></a>
        <a href="https://facebook.com/MarceloArancibiaSJ" target={'_blank'}><img className='socialIcon' src="./img/icons/twitter.png" alt='Logo Twitter' /></a>
        <a href="https://www.tiktok.com/@marceloarancibiaok" target={'_blank'}><img className='socialIcon' src="./img/icons/tiktok.png" alt='Logo Tiktok' /></a>
      </div>
      <div>
        <h2 className='footerTitle'>Marcelo<span>Arancibia</span></h2>
      </div>
      <div className='footerInfo'>
        <p>© 2023 | Marcelo Arancibia</p>
        <p>Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer