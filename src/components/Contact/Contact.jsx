import React from 'react';
import Form from '../Form/Form';
import Subtitle from '../Subtitle/Subtitle';
import './Contact.css';

function Contact() {
  return (
    <section id='contact' className='contactSection'>
      <Subtitle text={'CONTACTO'} />
      <article data-aos='fade-up' data-aos-duration="1000" className='contactContainer'>
        <section>
          <div>
            <div className='contactItem'>
              <img src="./img/tel.png" alt="" />
              <p>(264)5736450</p>
            </div>
            <div className='contactItem'>
              <img src="./img/email.png" alt="" />
              <p>contacto@marceloarancibia.com.ar</p>
            </div>
          </div>
          <div>
            <div className='contactItem'>
              <img src="./img/face.png" alt="" />
              <p>marceloarancibia</p>
            </div>
            <div className='contactItem'>
              <img src="./img/insta.png" alt="" />
              <p>arancibiamarcelook</p>
            </div>
            <div className='contactItem'>
              <img src="./img/twitter.png" alt="" />
              <p>@MarceArancibia_</p>
            </div>
            <Form />
          </div>
        </section>
      </article>
    </section>
  )
}

export default Contact