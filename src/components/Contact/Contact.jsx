import React from 'react';
import Form from '../Form/Form';
import Subtitle from '../Subtitle/Subtitle';
import './Contact.css';

function Contact() {
  return (
    <section id='contact' className='contactSection'>
      <Subtitle text={'CONTACTO'} />
      <article data-aos='fade-up' data-aos-duration="1000" className='contactContainer'>
        <img className='contactImg' src="./img/14.png" alt="" />
        <Form />
        <img className='contactImg' src="./img/16.png" alt="" />
      </article>
    </section>
  )
}

export default Contact