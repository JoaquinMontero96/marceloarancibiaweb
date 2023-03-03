import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section>
      <div className='subtitle'>
        <img src="./img/h2.png" className='subtitleImg' />
        <h2 className='subtitleTxt'><span>CONTACTO</span></h2>
      </div>
      <article>
        <img className='sectionImg' src="./img/contacto.jpg" alt="" />
      </article>
    </section>
  )
}

export default Contact