import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';

const imageURL = 'https://image.tmdb.org/t/p/original';

function Result({ result, openPopup }) {
  return (
    <div className='result' onClick={() => openPopup(result.id)}>
        <img src={imageURL + result.poster_path}/>
        <h3>{result.title}</h3>
    </div>
  )
}

export default Result