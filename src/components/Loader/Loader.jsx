import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className='loader-container'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      <img className='loader-img' src="./img/15.png" alt="" />
    </div>
  )
}

export default Loader