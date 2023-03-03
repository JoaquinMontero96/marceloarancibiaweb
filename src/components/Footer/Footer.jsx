import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <h2 className='footerTitle'>Marcelo<span>Arancibia</span></h2>
      </div>
      <div>
        <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><img className='socialIcon' src="./img/face.png" alt="logo facebook" /></a>
        <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><img className='socialIcon' src="./img/insta.png" alt="logo instagram" /></a>
        <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><img className='socialIcon' src="./img/twitter.png" alt="logo twitter" /></a>
      </div>
      <div>
        <p>© 2023 | Marcelo Arancibia</p>
        <p>Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
