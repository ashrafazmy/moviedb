import React from 'react'

function Search({handleInput}) {
  return (
    <section class="searchBox-wrap">
        <input 
        type='text' 
        placeholder='Search for a movie.' 
        className='searchBox' 
        onChange={handleInput}
        />
        
    </section>
  )
}

export default Search