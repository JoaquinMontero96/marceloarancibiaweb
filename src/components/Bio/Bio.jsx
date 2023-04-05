import React from 'react';
import Subtitle from '../Subtitle/Subtitle';
import './Bio.css';

function Bio() {
  return (
    <section id='bio'>
      <Subtitle text={'¿QUIÉN SOY?'} />
      <article className='bioArticle' data-aos='fade-up' data-aos-duration="1000">
        <img className='bioImg' src="./img/quiensoy.png" alt="Marcelo Arancibia, candidato a gobernador de San Juan" />
        <div className='articleTxt'>
          <p>¡Hola a todos! Me presento, soy Marcelo Arancibia, candidato a gobernador de San Juan. Quiero compartir con ustedes mi historia y cómo llegué hasta aquí. Nací en Trinidad un 2 de diciembre de 1969. Mis padres, conocidos como "la yoyi" y "el flaco", me enseñaron desde pequeño el valor del trabajo duro y la honestidad.</p>
          <p>Estudié en la Escuela Modelo durante mi primaria y en el Colegio Central Universitario Mariano Moreno para mi secundaria. Después, me fui a Córdoba para estudiar Derecho. Elegí esta carrera porque entendí que la justicia y la política están estrechamente relacionadas. Para ser un buen político, era necesario cumplir con la Constitución y ser honesto. Luego, regresé a San Juan en 1995 para ejercer mi profesión de abogado y continuar con mi militancia política en la Juventud Radical.</p>
          <p>En el 2003, fui concejal de la ciudad de San Juan y luego me alejé de la política para acercarme a la colegiación del Foro de Abogados. Tuve la suerte de ser elegido para ocupar varios cargos importantes en el Foro, incluyendo la presidencia. Sin embargo, vi la crisis institucional que afecta a nuestra provincia y decidí volver a la vida política partidaria.</p>
          <p>Hoy, me presento ante ustedes como candidato a gobernador con muchas ansias de cambiar las cosas. Quiero terminar con la desidia y la corrupción que tanto daño le hacen a nuestra comunidad. Mi compromiso es trabajar con honestidad, justicia y transparencia para mejorar la calidad de vida de todos los ciudadanos de San Juan. ¡Gracias por leer mi historia y espero contar con su apoyo en esta nueva etapa!</p>
        </div>
      </article>
    </section>
  )
}

export default Bio
