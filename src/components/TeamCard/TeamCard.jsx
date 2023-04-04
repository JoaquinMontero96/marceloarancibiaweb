import React from 'react';
import './TeamCard.css';

function TeamCard({url, nombre, partido}) {
  return (
    <div class="profile">
      <img src={url} alt=""/><span class="name">{nombre}</span><span class="partido">{partido}</span>
    </div>
  )
}

export default TeamCard
