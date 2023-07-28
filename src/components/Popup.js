import React from 'react'
const imageURL = 'https://image.tmdb.org/t/p/original';

function Popup({ selected,  closePopup }) {
  return (
    <section className='popup'>
        <div className='content'>
            <h2>{selected.title}  </h2>
            <h2>({selected.original_title})<span> {selected.release_date} </span></h2>
            <br></br>
            <p className='rating'>Rating: {selected.vote_average} /10</p>
            <div className='plot'>
                <img src={imageURL + selected.poster_path} />
                <p> {selected.overview} </p>
            </div>
            <button className='close' onClick={closePopup}>Close</button>
        </div>
    </section>
   )
}

export default Popup