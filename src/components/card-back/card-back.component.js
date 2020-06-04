import React from 'react';

import './card-back.styles.scss';


function CardBack({ handleClick}) {
  return(
  <div className='card-back' onClick={handleClick}></div>
  );
}

export default CardBack;