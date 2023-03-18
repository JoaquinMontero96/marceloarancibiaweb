import React from 'react';
import './Bio.css';

function Bio() {
  return (
    <section id='bio'>
      <div className='subtitle'>
        <img src="./img/h2.png" className='subtitleImg' alt=''/>
        <h2 className='subtitleTxt'>¿QUIÉN <span>SOY</span>?</h2>
      </div>
      <article>
        <img className='sectionImg' src="./img/quiensoy.jpg" alt="Marcelo Arancibia junto a la estatua de Domingo Faustino Sarmiento" />
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
