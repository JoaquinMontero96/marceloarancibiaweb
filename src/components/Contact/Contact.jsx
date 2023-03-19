import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id='contact' className='contactSection'>
      <div data-aos="fade-right" className='subtitle'>
        <img src="./img/h2.png" className='subtitleImg' alt=''/>
        <h2 className='subtitleTxt'><span>CONTACTO</span></h2>
      </div>
      <article data-aos='fade-up' className='contactContainer'>
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
              <p>marceloalberto.arancibia</p>
            </div>
            <div className='contactItem'>
              <img src="./img/insta.png" alt="" />
              <p>arancibiamarcelook</p>
            </div>
            <div className='contactItem'>
              <img src="./img/twitter.png" alt="" />
              <p>@MarceArancibia_</p>
            </div>
          </div>
        </section>
      </article>
    </section>
  )
}

export default Contact