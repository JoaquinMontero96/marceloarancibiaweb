import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <>
      <img data-aos='fade-in' data-aos-duration="1000" src="./img/portada.webp" alt="Marcelo Arancibia en el Jardín de los Poetas, Rivadavia" className='heroImg' />
      <div data-aos='fade-in' data-aos-duration="1000" className='heroImgPc' />
    </>
  )
}

export default Hero