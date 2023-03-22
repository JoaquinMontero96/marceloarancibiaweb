import React from 'react';
import ProposalCard from '../ProposalCard/ProposalCard';
import Subtitle from '../Subtitle/Subtitle';
import './Proposal.css';

function Proposal() {
  return (
    <section id='proposal'>
      <Subtitle text={'PROPUESTAS'} />
      <article className='proposalContainer'>
        <ProposalCard
          url='./img/icons/educacion.png'
          title='EDUCACIÓN'
          txt='Proponer programas y proyectos para mejorar la calidad de la educación en la provincia, incluyendo la creación de más escuelas y programas de capacitación para los maestros. También se puede promover la educación técnica y vocacional para preparar a los jóvenes para el mercado laboral.'
        />
        <ProposalCard
          url='./img/icons/salud.png'
          title='SALUD'
          txt='Implementar políticas que mejoren la accesibilidad a servicios de salud, como la construcción de centros de atención primaria y la promoción de programas de prevención de enfermedades. Además, se pueden establecer alianzas con el sector privado para mejorar la infraestructura y el equipamiento de los hospitales existentes.'
        />
        <ProposalCard
          url='./img/icons/empleo.png'
          title='EMPLEO'
          txt='Implementar políticas que fomenten la creación de empleo y el emprendimiento local, a través de la promoción de incentivos fiscales y la creación de un clima de negocios favorable. También se pueden promover programas de capacitación y empleo para jóvenes y desempleados.'
        />
        <ProposalCard
          url='./img/icons/seguridad.png'
          title='SEGURIDAD'
          txt='Fortalecer la seguridad pública y combatir la delincuencia, mediante la inversión en la capacitación y equipamiento de la policía local. Además, se pueden promover programas de prevención de la violencia y la delincuencia en las escuelas y comunidades.'
        />
        <ProposalCard
          url='./img/icons/medioambiente.png'
          title='MEDIO AMBIENTE'
          txt='Promover políticas y programas de protección ambiental, como la implementación de programas de reciclaje y la promoción de energías renovables. Además, se pueden promover programas de educación ambiental en las escuelas y comunidades para fomentar una cultura de cuidado y respeto por el medio ambiente.'
        />
      </article>
    </section>
  )
}

export default Proposal
