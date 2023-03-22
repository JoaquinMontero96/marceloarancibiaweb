import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <>
      <img data-aos='fade-in' data-aos-duration="2000" src="./img/portada.jpg" alt="Portada web de Marcelo Arancibia" className='heroImg' />
      <div className='heroImgPc' />
    </>
  )
}

export default Hero