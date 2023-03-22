import React from 'react';
import Subtitle from '../Subtitle/Subtitle';
import './Bio.css';

function Bio() {
  return (
    <section id='bio'>
      <Subtitle text={'¿QUIÉN SOY?'} />
      <article className='bioArticle' data-aos='fade-up' data-aos-duration="1000">
        <img className='bioImg' src="./img/quiensoy.png" alt="Marcelo Arancibia junto a la estatua de Domingo Faustino Sarmiento" />
        <div className='articleTxt'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea animi ullam debitis eaque nobis error odio? Repellendus debitis quasi expedita deleniti! Vel doloremque, repudiandae, facilis quos reiciendis voluptate suscipit unde incidunt eveniet rerum delectus dolore sapiente voluptatibus. Eius nisi distinctio cum fugiat qui soluta neque accusantium sequi doloribus accusamus.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto dolorem non maiores voluptates repellendus porro cupiditate, doloribus qui libero in.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet vero iure ex impedit fuga officia quidem quae exercitationem ducimus fugiat cupiditate nesciunt animi explicabo voluptates consequatur, quo amet autem ut, quis quam vitae asperiores magni.</p>
        </div>
      </article>
    </section>
  )
}

export default Bio
