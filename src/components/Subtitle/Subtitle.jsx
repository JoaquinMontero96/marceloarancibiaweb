import React from 'react';
import './Subtitle.css';

function Subtitle({text}) {
  return (
    <div data-aos="fade-right" data-aos-duration="1000" className='subtitle'>
      <h2 className='subtitleTxt'>{text}</h2>
    </div>
  )
}

export default Subtitle