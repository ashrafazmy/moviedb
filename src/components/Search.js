import React from 'react'

function Search({handleInput, search}) {
  return (
    <section class="searchBox-wrap">
        <div className="search-container">
        <input
          type='text'
          placeholder='Search for a movie.'
          className='searchBox'
          onChange={handleInput}
          onKeyDown={search}
        />
        <button onClick={search}>Enter</button>
      </div>
    </section>
  )
}

export default Search