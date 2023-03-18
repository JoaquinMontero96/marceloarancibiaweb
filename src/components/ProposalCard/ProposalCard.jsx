import React from 'react';
import './ProposalCard.css';

function ProposalCard({url, title, txt}) {
  return (
    <div className='proposalCard'>
      <img className='proposalCard__img' src={url} alt="" />
      <h2 className='proposalCard__title'>{title}</h2>
      <p className='proposalCard__txt'>{txt}</p>
    </div>
  )
}

export default ProposalCard
